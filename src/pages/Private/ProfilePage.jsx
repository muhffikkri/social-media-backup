import { useOutletContext } from "react-router-dom";
import Friendlist from "../../components/Private/Friendlist";
import PostSkeleton from "../../components/Post/PostSkeleton";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Public/Loading";
import axios from "axios";
import Post from "../../components/Post/Post";
export default function ProfilePage() {
  const { isDarkMode, setActivePage } = useOutletContext();
  setActivePage("profile-page");
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [skipPost, setSkipPost] = useState(0);
  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchMoreData = async () => {
    try {
      await axios
        .get("http://localhost:3001/api/posts/get", {
          params: { skipPost, limit: 4 },
        })
        .then((res) => {
          setSkipPost((prevSkipPost) => prevSkipPost + 4);
          setPosts((prevPosts) => [...prevPosts, ...res.data.data]);
          res.data.data.length > 0 ? setHasMore(true) : setHasMore(false);
        })
        .catch((err) => {
          console.error(err.response.data);
          handleShowToast(err.response.data.status, err.response.data.msg);
        });
    } catch (err) {
      console.error(err);
      handleShowToast("error", "Something went wrong, please try again later!");
    }
  };

  const fetchProfileData = async () => {
    try {
      const userId = localStorage.getItem("user"); // Ambil userId dari local storage
      if (!userId) {
        console.error("User ID tidak ditemukan di local storage.");
        handleShowToast("error", "User ID tidak ditemukan.");
        return;
      }

      const res = await axios.get(`http://localhost:3001/api/users/get/userProfile/${userId}`, {});
      setProfile(res.data.user); // Data profil disimpan ke state
      // setPosts(res.data.userPosts);
    } catch (err) {
      console.error(err.response?.data || err.message);
      handleShowToast("error", "Gagal mengambil data profil.");
    }
  };

  return (
    <>
      <div className="md:h-[calc(100vh-73px)] mt-[61px] md:mt-[73px] xl:ml-[288px]">
        <div className="flex items-center justify-center w-full relative">
          <div
            className="w-full h-32 md:h-64 bg-d-text"
            style={{
              backgroundImage: `url(${profile?.bannerPath ? `http://localhost:3001/${profile.bannerPath}` : ""})`,
            }}
          ></div>
          <label
            htmlFor="profile-pict"
            className="rounded-full bg-d-text w-7 h-7 lg:w-10 lg:h-10 flex items-center justify-center bg-cover absolute lg:-bottom-3 lg:right-4 -bottom-4 right-2 backdrop:cursor-pointer transition-all duration-300 hover:bg-d-secondary shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.15)]"
          >
            <img src="./icons/pencil.svg" alt="upload" className="lg:w-8 lg:h-8 w-5 h-5" />
          </label>
        </div>
        <div className="w-full h-auto px-6 lg:px-8 relative">
          <div htmlFor="profile-pict" className="lg:w-24 lg:h-24 w-16 h-16 absolute">
            <label
              htmlFor="profile-pict"
              className="rounded-full bg-d-text w-7 h-7 lg:w-10 lg:h-10 flex items-center justify-center bg-cover absolute lg:mt-4 mt-3 lg:-left-3 -left-1 backdrop:cursor-pointer transition-all duration-300 hover:bg-d-secondary shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.15)] z-10"
            >
              <img src="./icons/pencil.svg" alt="upload" className="lg:w-8 lg:h-8 w-5 h-5" />
            </label>
            <img
              src={profile?.picturePath ? `http://localhost:3001/${profile.picturePath}` : "./images/default-profile-picture.png"}
              alt="Profile"
              className="-translate-y-1/2 bg-cover rounded-full w-full h-full shadow-inner ring-2 ring-d-primary cursor-pointer z-0"
            />
            {/* <img
              src={post.picturePath ? `http://localhost:3001/${updatePath(post.picturePath)}` : "/images/default-profile-picture.png"}
              alt="profile pict"
              className="-translate-y-1/2 bg-cover rounded-full w-full h-full shadow-inner ring-2 ring-d-primary cursor-pointer z-0"
            /> */}
          </div>
          <div className="box-border">
            <div className="w-full h-16 md:h-10 ">
              <div className="flex flex-row h-full md:justify-end items-end gap-2 md:gap-5">
                <div className="text-md md:text-xl xl:text-2xl dynamic-text">
                  <span className="font-bold dynamic-text">{posts.length}</span> Post
                </div>
                <div className="text-md md:text-xl xl:text-2xl dynamic-text">
                  <span className="font-bold dynamic-text">{profile?.followers?.length || 0}</span> Follower
                </div>
                <div className="text-md md:text-xl xl:text-2xl dynamic-text">
                  <span className="font-bold dynamic-text">{profile?.followings?.length || 0}</span> Following
                </div>
              </div>
              <div className="w-full h-auto gap-3 flex mt-1 lg:mt-3 xl:mt-5 flex-row relative">
                <div>
                  <div className="font-bold text-md md:text-xl cursor-pointer dynamic-text text-ellipsis whitespace-nowrap overflow-hidden">{profile?.displayName || "Nama Tidak Diketahui"}</div>
                  <div className="font-semibold text-xs md:text-sm opacity-80 dynamic-text">{profile?.location || "Lokasi Tidak Diketahui"}</div>
                </div>
                <div className="py-1 w-36 bg-d-accent rounded-sm">
                  <button className="w-full h-full font-bold text-lg dynamic-text">Follow</button>
                </div>
              </div>
              <div className="mt-3 mb-3 relative">
                <p className="dynamic-text">{profile?.bio || "Bio tidak tersedia."}</p>
              </div>
              <div className="flex gap-3 h-96 lg:h-[calc(94vh)] xl:h-[calc(96vh)]">
                <div className="flex flex-col h-auto justify-between gap-3 rounded-xl shrink xl:w-[70%] mt-2 overflow-y-auto">
                  <InfiniteScroll
                    dataLength={posts.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<Loading />}
                    endMessage={
                      <p className="dynamic-text w-full center p-2">
                        <b>No more posts here. Why not share something?</b>
                      </p>
                    }
                  >
                    {posts.map((post, index) => (
                      <div className="w-full h-auto mb-2 " id="postsContainer" key={index}>
                        <Post isDarkMode={isDarkMode} post={post} />
                      </div>
                    ))}
                  </InfiniteScroll>
                </div>
                <div className="w-[30%] hidden lg:block">
                  <Friendlist />
                </div>
              </div>
              <div className="w-full h-16"></div>
              <div className="w-full h-16 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

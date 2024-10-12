import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Friendlist from "../../components/Private/Friendlist";
import Post from "../../components/Post/Post";
import PostSkeleton from "../../components/Post/PostSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Public/Loading";
import axios from "axios";

export default function HomePage({ handleShowToast }) {
  const { isDarkMode, setActivePage } = useOutletContext();
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [skipPost, setSkipPost] = useState(0);
  setActivePage("home-page");
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/posts/get", {
        params: { skipPost, limit: 4 },
      })
      .then((res) => {
        setPosts(res.data.data);
        setSkipPost((prev) => prev + 2);
      })
      .catch((err) => {
        console.error(err.response.data);
        handleShowToast(err.response.data.status, err.response.data.msg);
      });
  }, []);

  const fetchMoreData = async () => {
    try {
      await axios
        .get("http://localhost:3001/api/posts/get", {
          params: { skipPost, limit: 4 },
        })
        .then((res) => {
          setPosts((prevPosts) => [...prevPosts, ...res.data.data]);
          res.data.data.length > 0 ? setHasMore(true) : setHasMore(false);
        })
        .catch((err) => {
          console.error(err.response.data);
          handleShowToast(err.response.data.status, err.response.data.msg);
        });

      setSkipPost((prevSkipPost) => prevSkipPost + 4);
    } catch (err) {
      console.error(err);
      handleShowToast("error", "Something went wrong, please try again later!");
    }
  };
  return (
    <>
      <div className="xl:flex md:h-[calc(100vh-73px)] mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-between xl:mr-[28%]">
        {/* Main content */}
        <div className="font-open-sans w-full py-2 px-4 h-full mx-auto pb-[54px] md:pb-[72px] xl:pb-0">
          {/* Posts container */}
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
              <div
                className="w-full h-auto mb-2 "
                id="postsContainer"
                key={index}
              >
                <Post isDarkMode={isDarkMode} post={post} />
              </div>
            ))}
          </InfiniteScroll>
          {/* <div className="w-full h-auto mb-2 " id="postsContainer">
            <PostSkeleton isDarkMode={isDarkMode} />
            <PostSkeleton isDarkMode={isDarkMode} />
            <PostSkeleton isDarkMode={isDarkMode} />
          </div> */}

          {/* End Posts */}
        </div>
        {/* End main content */}

        <Friendlist />
      </div>
    </>
  );
}

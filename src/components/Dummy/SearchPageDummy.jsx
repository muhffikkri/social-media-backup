import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Public/Loading";
import SearchHistory from "../../components/Private/SearchHistory";
import UserCard from "../../components/Private/UserCard";
export default function SearchPage({ handleShowToast }) {
  const [users, setUsers] = useState({});

  // if search type is by username then its true and if type is by hashtags then its false
  const [searchByUsername, setSearchType] = useState(true);
  const { setActivePage, isDarkMode } = useOutletContext();
  const searchQuery = useRef();
  setActivePage("search-page");

  const searchUser = async (displayName) => {
    try {
      await axios
        .post("http://localhost:3001/api/search/users", {
          userId: localStorage.getItem("user"),
          displayName,
          limit: 4,
          skipUser: 0,
        })
        .then((res) => {
          setUsers(res.data.users);
          console.log(res.data);
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

  // const fetchMoreUser = async () => {
  //   try {
  //     await axios
  //       .get("http://localhost:3001/api/posts/get", {
  //         params: { skipPost, limit: 4 },
  //       })
  //       .then((res) => {
  //         setPosts((prevPosts) => [...prevPosts, ...res.data.data]);
  //         res.data.data.length > 0 ? setHasMore(true) : setHasMore(false);
  //       })
  //       .catch((err) => {
  //         console.error(err.response.data);
  //         handleShowToast(err.response.data.status, err.response.data.msg);
  //       });

  //     setSkipPost((prevSkipPost) => prevSkipPost + 4);
  //   } catch (err) {
  //     console.error(err);
  //     handleShowToast("error", "Something went wrong, please try again later!");
  //   }
  // };

  const searchHashtags = async (hashtag) => {
    try {
      await axios
        .post("http://localhost:3001/api/search/hashtags", {
          hashtag,
        })
        .then((res) => {
          setUsers(res.data.posts);
          console.log(res.data);
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
  return (
    <>
      <div className="xl:flex mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-between xl:mr-[25%]">
        {/* Main content */}
        <div className="font-open-sans w-full py-2 px-4 mx-auto ">
          {/* Posts container */}
          <div className="w-full h-auto mt-2 " id="postsContainer">
            <form
              className="w-full h-auto flex mb-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.current.value.length <= 0) {
                  handleShowToast("error", "Please input something!");
                } else {
                  searchUser(searchQuery.current.value);
                }

                console.log(searchQuery.current.value);
              }}
            >
              <input
                type="search"
                ref={searchQuery}
                className="rounded-lg dynamic-primary w-full h-12 p-2 pl-4 dynamic-text text-lg focus:ring-2 focus:ring-d-accent outline-none shadow-xl dark:shadow-none"
                placeholder="Search Your Friends Or Hashtags!"
              />
            </form>

            <div className="w-full h-auto flex mb-3 justify-between items-center">
              <div
                className={`w-1/2 flex justify-center items-center gap-2 border-b border-l-text dark:border-d-text p-2 cursor-pointer ${
                  searchByUsername
                    ? "opacity-100 border-opacity-100"
                    : "opacity-70 border-opacity-30"
                }`}
                onClick={() => {
                  setSearchType(true);
                }}
              >
                <p className="dynamic-text font-semibold text-lg">Users</p>
                <img
                  src={`./icons/${isDarkMode ? "d-" : "l-"}user.svg`}
                  alt="User icon"
                  className="w-6 h-6"
                />
              </div>
              <div
                className={`w-1/2 flex justify-center items-center gap-2 border-b border-l-text dark:border-d-text p-2 cursor-pointer ${
                  !searchByUsername
                    ? "opacity-100 border-opacity-100"
                    : "opacity-70 border-opacity-30"
                }`}
                onClick={() => {
                  setSearchType(false);
                }}
              >
                <p className="dynamic-text font-semibold text-lg">Hashtags</p>
                <img
                  src={`./icons/${isDarkMode ? "d-" : "l-"}hashtag.svg`}
                  alt="Hashtag icon"
                  className="w-6 h-6"
                />
              </div>
            </div>

            {/* Search result below */}

            <InfiniteScroll
              dataLength={users.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<Loading />}
              endMessage={
                <p className="dynamic-text w-full center p-2">
                  <b>No more users here.</b>
                </p>
              }
            >
              {users.map((user, index) => (
                <UserCard key={index} />
              ))}
            </InfiniteScroll>
            <UserCard />

            {/* End Posts */}
          </div>
        </div>
        {/* End main content */}

        <SearchHistory isDarkMode={isDarkMode} />
      </div>
    </>
  );
}

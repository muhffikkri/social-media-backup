import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/Public/Loading";
import SearchHistory from "../../components/Private/SearchHistory";
import UserCard from "../../components/Private/UserCard";
import debounce from "../../functions/debounce";
import Post from "../../components/Post/Post";

export default function SearchPage({ handleShowToast }) {
  const { setActivePage, isDarkMode } = useOutletContext();
  setActivePage("search-page");
  const searchQuery = useRef();
  const [searchByUsername, setSearchType] = useState(true);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [skipUser, setSkipUser] = useState(0);
  const [skipPost, setSkipPost] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const limit = 8;
  // Fetch initial results based on query
  const fetchUsers = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/search/users", {
        userId: localStorage.getItem("user"),
        displayName: searchQuery.current.value,
        limit,
        skipUser: 0,
      });
      setUsers(res.data.users);
      console.log(res.data.users);
      setSkipUser(4);
      setHasMore(res.data.users.length === limit);
      setNotFound(res.data.users.length === 0);
    } catch (err) {
      console.error(err.response.data);
      handleShowToast("error", "Something went wrong, please try again later!");
    }
  };

  // Debounce wrapper for fetchUsers
  const debouncedFetchUsers = debounce(fetchUsers, 300);

  // Fetch additional results for infinite scroll
  const fetchMoreUser = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/search/users", {
        userId: localStorage.getItem("user"),
        displayName: searchQuery.current.value,
        limit,
        skipUser,
      });
      setUsers((prevUsers) => [...prevUsers, ...res.data.users]);
      console.log(res.data.users);
      setSkipUser((prevSkip) => prevSkip + 4);
      setHasMore(res.data.users.length === 4);
    } catch (err) {
      console.error(err.response.data);
      handleShowToast("error", "Something went wrong, please try again later!");
    }
  };

  const fetchPostByHashtags = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/search/hashtags",
        {
          hashtag: searchQuery.current.value,
          limit,
          skipUser: 0,
        }
      );
      console.log(res);
      setPosts(res.data.posts);
      console.log(res.data.posts);
      setSkipUser(4);
      setHasMore(res.data.posts.length === limit);
      setNotFound(res.data.posts.length === 0);
    } catch (err) {
      console.error(err);
      handleShowToast("error", "Something went wrong, please try again later!");
    }
  };

  // Debounce wrapper for fetchUsers
  const debouncedFetchPosts = debounce(fetchPostByHashtags, 300);

  // Fetch additional results for infinite scroll
  const fetchMorePost = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/search/hashtags",
        {
          hashtag: searchQuery.current.value,
          limit,
          skipUser: 0,
        }
      );
      setPosts(res.data.posts);
      console.log(res.data.posts);
      setSkipUser(4);
      setHasMore(res.data.posts.length === limit);
      setNotFound(res.data.posts.length === 0);
    } catch (err) {
      console.error(err.response.data);
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
            <div className="w-full h-auto flex mb-3">
              <input
                type="search"
                ref={searchQuery}
                className="rounded-lg dynamic-primary w-full h-12 p-2 pl-4 dynamic-text text-lg focus:ring-2 focus:ring-d-accent outline-none shadow-xl dark:shadow-none"
                placeholder="Search Your Friends Or Hashtags!"
                onChange={(e) => {
                  if (searchByUsername) {
                    setUsers([]); // Clear previous results
                    setSkipUser(0); // Reset pagination
                    setHasMore(false); // Reset hasMore
                    if (e.target.value.trim()) debouncedFetchUsers(); // Fetch new results if query is not empty
                  } else {
                    setPosts([]); // Clear previous results
                    setSkipPost(0); // Reset pagination
                    setHasMore(false); // Reset hasMore
                    if (e.target.value.trim()) debouncedFetchPosts(); // Fetch new results if query is not empty
                  }
                }}
              />
            </div>

            <div className="w-full h-auto flex mb-3 justify-between items-center">
              <div
                className={`w-1/2 flex justify-center items-center gap-2 border-b border-l-text dark:border-d-text p-2 cursor-pointer ${
                  searchByUsername
                    ? "opacity-100 border-opacity-100"
                    : "opacity-70 border-opacity-30"
                }`}
                onClick={() => {
                  setSearchType(true);
                  searchQuery.current.value = "";
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
                  searchQuery.current.value = "";
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
            {notFound ? (
              <p className="dynamic-text w-full center p-2">
                <b>{searchByUsername ? "User" : "Hashtag"} not found</b>
              </p>
            ) : searchByUsername ? (
              <InfiniteScroll
                dataLength={users.length}
                next={fetchMoreUser}
                hasMore={hasMore}
                loader={<Loading />}
                endMessage={<span></span>}
              >
                {users.map((user, index) => (
                  <UserCard key={index} user={user} />
                ))}
              </InfiniteScroll>
            ) : (
              <InfiniteScroll
                dataLength={posts.length}
                next={fetchMorePost}
                hasMore={hasMore}
                loader={<Loading />}
                endMessage={<span></span>}
              >
                {posts.map((post, index) => (
                  <Post key={index} isDarkMode={isDarkMode} post={post} />
                ))}
              </InfiniteScroll>
            )}

            {/* End Posts */}
          </div>
        </div>
        {/* End main content */}

        <SearchHistory isDarkMode={isDarkMode} />
      </div>
    </>
  );
}

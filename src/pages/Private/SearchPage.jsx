import { useRef, useState } from "react";
import Friendlist from "../../components/Private/Friendlist";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
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
        .post("http://localhost:3001/api/search/hashtags", {
          userId: localStorage.getItem("user"),
          displayName,
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
            <div className="w-full h-auto flex mb-3">
              <input
                type="text"
                ref={searchQuery}
                className="rounded-lg dynamic-primary w-full h-12 p-2 pl-4 dynamic-text text-lg focus:ring-2 focus:ring-d-accent outline-none shadow-xl dark:shadow-none"
                placeholder="Search Your Friends Or Hashtags!"
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

            <UserCard />
            <UserCard />
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

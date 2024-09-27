import { useEffect, useState } from "react";
import Friendlist from "../../components/Private/Friendlist";
import NotificationCard from "../../components/Private/NotificationCard";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
export default function NotificationPage() {
  const { setActivePage, isDarkMode } = useOutletContext();
  const [notifications, setNotifications] = useState();
  setActivePage("notification-page");

  useEffect(() => {
    fetchUserNotifications(localStorage.getItem("user"));
  }, []);

  const fetchUserNotifications = async (userId) => {
    try {
      await axios
        .post("http://localhost:3001/api/users/get/notifications", { userId })
        .then((res) => {
          console.log(res.data);
          setNotifications(res.data.notifications);
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="xl:flex h-[calc(100vh-73px)] mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-center sm:mt-3 box-border">
        {/* Main content */}
        <div className="font-open-sans w-full md:px-3 mx-auto sm:py-3 ">
          {/* Posts container */}
          <div
            className="w-full h-full border-[0.5px] border-l-text dark:border-d-text border-opacity-10 dark:border-opacity-20 rounded-lg overflow-hidden"
            id="postsContainer"
          >
            <div className="border-b border-opacity-20 border-d-text flex justify-between items-center p-3 dynamic-secondary">
              <div className="text-2xl font-bold dynamic-text">
                Notification
              </div>
              <div className="border-[0.5px] border-opacity-20 border-l-text dark:border-d-text dark:border-opacity-20 p-2 rounded-md flex items-center justify-center gap-1 cursor-pointer dynamic-primary hover:bg-[#dbdbe4] dark:hover:bg-[#131316] ">
                <p className="dynamic-text font-semibold">Read All</p>
                <img
                  src={`./icons/${isDarkMode ? "d-" : "l-"}reader.svg`}
                  alt="read all"
                  className="w-5"
                />
              </div>
            </div>

            {/* Container section */}
            <div className="w-full h-full flex flex-col p-2 dynamic-primary overflow-y-scroll pb-20">
              {/* Card Section */}

              <div className="w-full p-2 flex flex-row items-center justify-between">
                <div className="center flex-row gap-2">
                  <img
                    src="./images/default-profile-picture.png"
                    alt="profile pict"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold text-base dynamic-text">
                    Dummy Friend
                  </p>
                  <span className="dynamic-text">has followed you</span>
                </div>
                <span className="dynamic-text opacity-80">18 minutes ago</span>
              </div>
              <div className="w-full p-2 flex flex-row items-center justify-between">
                <div className="center flex-row gap-2">
                  <img
                    src="./images/default-profile-picture.png"
                    alt="profile pict"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold text-base dynamic-text">
                    Dummy Friend
                  </p>
                  <span className="dynamic-text">has followed you</span>
                </div>
                <span className="dynamic-text opacity-80">18 minutes ago</span>
              </div>
              <div className="w-full p-2 flex flex-row items-center justify-between">
                <div className="center flex-row gap-2">
                  <img
                    src="./images/default-profile-picture.png"
                    alt="profile pict"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold text-base dynamic-text">
                    Dummy Friend
                  </p>
                  <span className="dynamic-text">has followed you</span>
                </div>
                <span className="dynamic-text opacity-80">18 minutes ago</span>
              </div>
              <div className="w-full p-2 flex flex-row items-center justify-between">
                <div className="center flex-row gap-2">
                  <img
                    src="./images/default-profile-picture.png"
                    alt="profile pict"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold text-base dynamic-text">
                    Dummy Friend
                  </p>
                  <span className="dynamic-text">has followed you</span>
                </div>
                <span className="dynamic-text opacity-80">18 minutes ago</span>
              </div>
              <div className="w-full p-2 flex flex-row items-center justify-between">
                <div className="center flex-row gap-2">
                  <img
                    src="./images/default-profile-picture.png"
                    alt="profile pict"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold text-base dynamic-text">
                    Dummy Friend
                  </p>
                  <span className="dynamic-text">has followed you</span>
                </div>
                <span className="dynamic-text opacity-80">18 minutes ago</span>
              </div>
              <div className="w-full p-2 flex flex-row items-center justify-between">
                <div className="center flex-row gap-2">
                  <img
                    src="./images/default-profile-picture.png"
                    alt="profile pict"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold text-base dynamic-text">
                    Dummy Friend
                  </p>
                  <span className="dynamic-text">has followed you</span>
                </div>
                <span className="dynamic-text opacity-80">18 minutes ago</span>
              </div>
              <div className="w-full p-2 flex flex-row items-center justify-between">
                <div className="center flex-row gap-2">
                  <img
                    src="./images/default-profile-picture.png"
                    alt="profile pict"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold text-base dynamic-text">
                    Dummy Friend
                  </p>
                  <span className="dynamic-text">has followed you</span>
                </div>
                <span className="dynamic-text opacity-80">18 minutes ago</span>
              </div>
              <div className="w-full p-2 flex flex-row items-center justify-between">
                <div className="center flex-row gap-2">
                  <img
                    src="./images/default-profile-picture.png"
                    alt="profile pict"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold text-base dynamic-text">
                    Dummy Friend
                  </p>
                  <span className="dynamic-text">has followed you</span>
                </div>
                <span className="dynamic-text opacity-80">18 minutes ago</span>
              </div>
              <div className="w-full p-2 flex flex-row items-center justify-between">
                <div className="center flex-row gap-2">
                  <img
                    src="./images/default-profile-picture.png"
                    alt="profile pict"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold text-base dynamic-text">
                    Dummy Friend
                  </p>
                  <span className="dynamic-text">has followed you</span>
                </div>
                <span className="dynamic-text opacity-80">18 minutes ago</span>
              </div>
              <div className="w-full p-2 flex flex-row items-center justify-between">
                <div className="center flex-row gap-2">
                  <img
                    src="./images/default-profile-picture.png"
                    alt="profile pict"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold text-base dynamic-text">
                    Dummy Friend
                  </p>
                  <span className="dynamic-text">has followed you</span>
                </div>
                <span className="dynamic-text opacity-80">18 minutes ago</span>
              </div>
              <div className="w-full p-2 flex flex-row items-center justify-between">
                <div className="center flex-row gap-2">
                  <img
                    src="./images/default-profile-picture.png"
                    alt="profile pict"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold text-base dynamic-text">
                    Dummy Friend
                  </p>
                  <span className="dynamic-text">has followed you</span>
                </div>
                <span className="dynamic-text opacity-80">18 minutes ago</span>
              </div>
              <div className="w-full p-2 flex flex-row items-center justify-between">
                <div className="center flex-row gap-2">
                  <img
                    src="./images/default-profile-picture.png"
                    alt="profile pict"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold text-base dynamic-text">
                    Dummy Friend
                  </p>
                  <span className="dynamic-text">commented on your post</span>
                </div>
                <span className="dynamic-text opacity-80">18 minutes ago</span>
              </div>
              <div className="w-full p-2 flex flex-row items-center justify-between">
                <div className="center flex-row gap-2">
                  <img
                    src="./images/default-profile-picture.png"
                    alt="profile pict"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold text-base dynamic-text">
                    Dummy Friend
                  </p>
                  <span className="dynamic-text">liked your post</span>
                </div>
                <span className="dynamic-text opacity-80">18 minutes ago</span>
              </div>
            </div>
          </div>
        </div>
        {/* End Posts */}
      </div>
      {/* End main content */}
    </>
  );
}

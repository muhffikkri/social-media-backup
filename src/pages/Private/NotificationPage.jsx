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
      <div className="xl:flex h-[calc(100vh-73px)] mt-[65px] md:mt-[73px] xl:ml-[288px] xl:justify-center sm:mt-3 box-border">
        {/* Main content */}
        <div className="font-open-sans w-full h-full md:px-3 mx-auto md:p-2 p-2 pb-[60px]">
          {/* Posts container */}
          <div
            className="w-full h-full border-[0.5px] border-l-text dark:border-d-text border-opacity-10 dark:border-opacity-20 rounded-lg overflow-hidden"
            id="postsContainer"
          >
            <div className="border-b border-opacity-20 border-d-text flex justify-between items-center xl:p-3 p-2 dynamic-secondary">
              <div className="xl:text-2xl text-xl font-bold dynamic-text">
                Notification
              </div>
              <div className="border-[0.5px] border-opacity-20 border-l-text dark:border-d-text dark:border-opacity-20 p-[6px] rounded-md flex items-center justify-center gap-1 cursor-pointer dynamic-primary hover:bg-[#dbdbe4] dark:hover:bg-[#131316] ">
                <p className="dynamic-text font-semibold xl:text-base text-sm">
                  Read All
                </p>
                <img
                  src={`./icons/${isDarkMode ? "d-" : "l-"}reader.svg`}
                  alt="read all"
                  className="xl:w-5 w-4"
                />
              </div>
            </div>

            {/* Container section */}
            <div className="w-full h-full flex flex-col xl:p-2 p-[6px] dynamic-primary overflow-y-scroll pb-20">
              {/* Card Section */}

              <NotificationCard />
              <NotificationCard />
              <NotificationCard />
            </div>
          </div>
        </div>
        {/* End Posts */}
      </div>
      {/* End main content */}
    </>
  );
}

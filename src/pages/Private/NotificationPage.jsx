import { useEffect, useState } from "react";
import Friendlist from "../../components/Private/Friendlist";
import NotificationCard from "../../components/Private/NotificationCard";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
export default function NotificationPage() {
  const { setActivePage } = useOutletContext();
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
      <div className="xl:flex h-[calc(100lvh - 117px)] mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-center sm:mt-3 box-border">
        {/* Main content */}
        <div className="font-open-sans w-full md:px-4 mx-auto sm:pt-3 ">
          {/* Posts container */}
          <div className="w-full h-[calc(100% - 117px)] border-[0.5px] border-d-text border-opacity-20 rounded-lg overflow-hidden" id="postsContainer">
            <div className="w-full h-auto flex flex-col dynamic-primary sm:rounded-xl mb-2 pb-2 dynamic-text">
              <div className="border-b border-opacity-20 border-d-text flex justify-between items-center p-4 bg-[#19191e]">
                <div className="text-2xl font-bold dynamic-text">Notification</div>
                <div>
                  <p>Read All</p>
                </div>
              </div>

              {/* Container section */}
              <div className="w-full flex flex-col mt-2 gap-2 p-2">
                {/* Card Section */}
                <div className="flex content-center box-border gap-2 md:gap-0">
                  <div className="w-8 flex justify-center content-center md:w-12">
                    <img src="./icons/d-checkmark.svg" alt="like" className="cursor-pointer w-full" />
                  </div>
                  <div className="flex items-center w-3/4 ml-1 md:ml-3 sm:w-5/6 sm:text-sm lg:w-full ">
                    <p className="inline-block align-bottom text-xs dynamic-text md:text-base">
                      <span className="font-semibold dynamic-text">Nickname</span> Lorem ipsum dolor, sit amet consectetur adipisicing el
                    </p>
                  </div>
                  <div className="bg-d-text w-10 h-10 ml-auto sm:w-12 sm:h-10 cursor-pointer"></div>
                </div>
              </div>

              <div className="w-full flex flex-col mt-2 gap-2">
                <div className="flex gap-2 p-1 content-center">
                  <div className="py-1 flex text-md font-bold dynamic-text">Hari ini</div>
                </div>

                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                {/* <NotificationCard /> */}
              </div>

              <div className="w-full flex flex-col mt-2 gap-2">
                <div className="flex gap-2 p-1 content-center">
                  <div className="py-1 flex text-md font-bold dynamic-text">Kemarin</div>
                </div>

                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
              </div>
            </div>
          </div>
          {/* End Posts */}
        </div>
        {/* End main content */}
      </div>
    </>
  );
}

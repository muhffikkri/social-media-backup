import { useEffect, useState } from "react";
import axios from "axios";
export default function SuggestedFriends() {
  const [suggestedFriends, setSuggestedFriends] = useState([]);
  // dummy
  const friends = [
    {
      name: "Rand",
      location: "CEO",
    },
    {
      name: "Rifat El-Rasista",
      location: "Bogor",
    },
    {
      name: "Bondan Kecap",
      location: "Dark Planet",
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/get/users", {
        params: { limit: 7 },
      })
      .then((res) => {
        setSuggestedFriends(res.data.users);
        console.log(res.data.users);
      })
      .catch((err) => {
        console.error(err.response);
        handleShowToast(err.response.data.status, err.response.data.msg);
      });
  }, []);
  return (
    <section className="fixed right-0 w-[28%] hidden lg:block lg:h-[calc(100vh-73px)]">
      <div className="w-full h-[100%] pt-2 pb-2 pr-2">
        <div className="w-full h-full dynamic-primary rounded-lg p-4">
          <h1 className="dynamic-text font-bold text-xl">Suggested Friends</h1>
          <hr className="hr my-2" />
          <div className="flex flex-col h-[calc(100%-36px)] overflow-y-auto rounded-lg">
            {friends.map((friend, i) => {
              return (
                <div
                  key={i}
                  className="flex w-full items-center justify-between mb-2 pr-2 dynamic-text"
                >
                  <img
                    src="/images/default-profile-picture.png"
                    alt="profile picture"
                    className="w-10 rounded-full"
                  />
                  <div className="flex flex-col w-[calc(100%-90px)] px-1">
                    <p className="text-base font-semibold text-ellipsis w-full whitespace-nowrap overflow-hidden dynamic-text">
                      {friend.name}
                    </p>
                    <p className="text-base dynamic-text">{friend.location}</p>
                  </div>
                  <div className="rounded-full cursor-pointer dynamic-secondary p-2 w-10 h-10 flex items-center">
                    <img
                      src="/icons/person-add.svg"
                      alt="add friend"
                      className="w-full"
                    />
                  </div>
                </div>
              );
            })}
            {/* {suggestedFriends.map((friend, i) => {
              return (
                <div
                  key={i}
                  className="flex w-full items-center justify-between mb-2 pr-2 dynamic-text"
                >
                  <img
                    src="/images/default-profile-picture.png"
                    alt="profile picture"
                    className="w-10 rounded-full"
                  />
                  <div className="flex flex-col w-[calc(100%-90px)] px-1">
                    <p className="text-base font-semibold text-ellipsis w-full whitespace-nowrap overflow-hidden dynamic-text">
                      {friend.displayName}
                    </p>
                    <p className="text-base dynamic-text">{friend.location}</p>
                  </div>
                  <div className="rounded-full cursor-pointer dynamic-secondary p-2 w-10 h-10 flex items-center">
                    <img
                      src="/icons/person-add.svg"
                      alt="add friend"
                      className="w-full"
                    />
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProfileSuggestedFriends() {
  const friends = [
    {
      name: "Rand",
      location: "CEO",
    },
    {
      name: "Excel PPG",
      location: "LA",
    },
    {
      name: "Roy Siregar",
      location: "Bekasi",
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
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-[55%]">
          <div className="w-full h-full dynamic-primary rounded-2xl p-4">
            <h1 className="dynamic-text font-bold text-xl mb-3">Suggested Friend</h1>
            <hr className="hr my-2" />
            <div className="flex flex-col overflow-y-auto rounded-lg">
              {friends.map((friend, i) => {
                return (
                  <div key={i} className="flex w-full items-center justify-between mb-2 pr-2 dynamic-text	 ">
                    <img src="/images/default-profile-picture.png" alt="profile picture" className="w-10 rounded-full" />
                    <div className="flex flex-col w-full px-3 justify-between">
                      <p className="text-base font-semibold text-ellipsis w-full whitespace-nowrap overflow-hidden dynamic-text">{friend.name}</p>
                      <p className="text-base dynamic-text">{friend.location}</p>
                    </div>
                    <div className="rounded-full cursor-pointer dynamic-secondary p-2 w-10 h-10 flex items-center">
                      <img src="/icons/person-add.svg" alt="add friend" className="w-full" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

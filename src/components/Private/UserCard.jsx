export default function UserCard() {
  return (
    <>
      <div className="w-full max-h-[70px] flex dynamic-primary p-3 lg:rounded-lg rounded-md	items-center justify-between gap-3 shadow-lg dark:shadow-none mb-2 cursor-pointer">
        <img
          src="./images/default-profile-picture.png"
          alt="Profile picture"
          className="lg:w-[50px] w-[42px] rounded-full"
        />
        <div className="flex flex-col flex-grow text-ellipsis whitespace-nowrap overflow-hidden">
          <p className="font-semibold lg:text-lg text-base dynamic-text text-ellipsis whitespace-nowrap overflow-hidden">
            Dummy Friend
          </p>
          <p className="font-medium lg:text-base text-sm  dynamic-text opacity-80 text-ellipsis whitespace-nowrap overflow-hidden">
            location
          </p>
        </div>
        <button className="bg-l-accent dark:bg-d-accent p-2 rounded-md xl:w-24 w-20 font-semibold dark:text-d-text text-l-secondary text-shadow hover:bg-[#1070ed] dark:hover:bg-[#1070ed]">
          Follow
        </button>
      </div>
    </>
  );
}

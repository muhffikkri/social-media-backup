export default function UserCard() {
  return (
    <>
      <div className="w-full max-h-[70px] flex dynamic-primary p-3 rounded-lg items-center justify-between gap-3 shadow-lg dark:shadow-none mb-2 cursor-pointer">
        <img
          src="./images/default-profile-picture.png"
          alt="Profile picture"
          className="w-[50px] rounded-full"
        />
        <div className="flex flex-col flex-grow">
          <p className="font-semibold text-lg dynamic-text">Dummy Friend</p>
          <p className="font-medium text-base dynamic-text opacity-80">
            Location
          </p>
        </div>
        <button className="bg-l-accent dark:bg-d-accent p-2 rounded-md w-24 font-semibold dark:text-d-text text-l-secondary text-shadow">
          Follow
        </button>
      </div>
    </>
  );
}

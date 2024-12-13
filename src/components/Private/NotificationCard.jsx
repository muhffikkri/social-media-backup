import formatDate from "../../functions/formatDate";
export default function NotificationCard({ notification }) {
  return (
    <>
      <div className="w-full xl:p-2 p-1 flex flex-row items-center justify-between flex-wrap">
        <div className="center flex-row xl:gap-2 gap-1 ">
          <img src="./images/default-profile-picture.png" alt="profile pict" className="xl:w-8 xl:h-8 w-6 h-6 rounded-full" />
          <p className="font-semibold md:text-base text-sm dynamic-text">{notification.displayName}</p>
          <span className="dynamic-text md:text-base text-sm">{notification.notification}</span>
        </div>
        <span className="dynamic-text opacity-80 md:text-base text-sm xl:p-1 p-[2px]">{formatDate(notification.date)}</span>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";

export default function SettingsMenu({ isDarkMode, setShowSettings }) {
  return (
    <>
      <div className="dynamic-primary border-solid border-[0.5px] border-d-text dark:border-opacity-20 absolute right-[5px] bottom-[-85px] w-40  shadow-2xl rounded-lg animate-slide-bottom overflow-hidden ">
        <ul>
          <Link
            to="/about"
            className="font-semibold"
            onClick={() => {
              setShowSettings(false);
            }}
          >
            <li className="px-2 flex items-center  cursor-pointer gap-1 pt-2 pb-2 hover:bg-l-secondary dark:hover:bg-d-secondary ">
              <p className="dynamic-text ">About</p>
              <img
                src={`./icons/${isDarkMode ? "d-" : "l-"}about.svg`}
                alt="about"
                className="h-6 w-6"
              />
            </li>
          </Link>
          <hr className="border-t-[1px] border-l-text dark:border-d-text w-full rounded-xl opacity-20" />
          <li className="p-2 flex items-center  cursor-pointer gap-1 hover:bg-red-100 dark:hover:bg-red-950">
            <p className="text-l-danger dark:text-d-danger ">Log Out</p>
            <img
              src={`./icons/${isDarkMode ? "d-" : "l-"}log-out.svg`}
              alt="Log-out"
              className="h-6 w-6"
            />
          </li>
          <hr className="border-t-[1px] border-l-text dark:border-d-text w-full rounded-xl opacity-20" />
          <li className="p-2 flex items-center  cursor-pointer gap-1 hover:bg-red-100 dark:hover:bg-red-950">
            <p className="text-l-danger dark:text-d-danger ">Delete Account</p>
            <img
              src={`./icons/${isDarkMode ? "d-" : "l-"}trash.svg`}
              alt="Delete Account"
              className="h-[20px] w-[20px]"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

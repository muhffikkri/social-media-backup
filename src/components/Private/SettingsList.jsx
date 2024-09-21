import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function SettingsMenu({
  isDarkMode,
  setShowSettings,
  setShowModalBox,
  showModalBox,
  setModalAction,
}) {
  const settingsRef = useRef(null);

  const handleClickOutside = (event) => {
    if (settingsRef.current && !settingsRef.current.contains(event.target)) {
      setShowSettings(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        ref={settingsRef}
        className="dynamic-primary border-solid border-[0.5px] border-d-text dark:border-opacity-20 absolute right-[5px] xl:bottom-[-85px] md:bottom-[-88px] bottom-[-88px] xl:w-40 w-36 shadow-2xl rounded-lg animate-slide-bottom overflow-hidden "
      >
        <ul>
          <Link
            to="/about"
            className="font-semibold"
            onClick={() => {
              setShowSettings(false);
            }}
          >
            <li className="p-2 py-[10px] flex items-center  cursor-pointer gap-1 hover:bg-l-secondary dark:hover:bg-d-secondary ">
              <p className="dynamic-text xl:text-base text-sm">About</p>
              <img
                src={`./icons/${isDarkMode ? "d-" : "l-"}about.svg`}
                alt="about"
                className="xl:h-6 xl:w-6  w-5 h-5"
              />
            </li>
          </Link>
          <hr className="border-t-[1px] border-l-text dark:border-d-text w-full rounded-xl opacity-20" />
          <li
            className="p-2 py-[10px] flex items-center  cursor-pointer gap-1 hover:bg-red-100 dark:hover:bg-red-950"
            onClick={() => {
              setShowModalBox(!showModalBox);
              setShowSettings(false);
              setModalAction("log-out");
            }}
          >
            <p
              className="text-l-danger dark:text-d-danger xl:text-base text-sm
            "
            >
              Log Out
            </p>
            <img
              src={`./icons/${isDarkMode ? "d-" : "l-"}log-out.svg`}
              alt="Log-out"
              className="xl:h-6 xl:w-6  w-5 h-5"
            />
          </li>
          <hr className="border-t-[1px] border-l-text dark:border-d-text w-full rounded-xl opacity-20" />
          <li
            className="p-2 py-[10px] flex items-center  cursor-pointer gap-1 hover:bg-red-100 dark:hover:bg-red-950"
            onClick={() => {
              setShowModalBox(!showModalBox);
              setShowSettings(false);
              setModalAction("delete-account");
            }}
          >
            <p className="text-l-danger dark:text-d-danger xl:text-base text-sm">
              Delete Account
            </p>
            <img
              src={`./icons/${isDarkMode ? "d-" : "l-"}trash.svg`}
              alt="Delete Account"
              className="xl:w-5 xl:h-5 md:w-4 md:h-4 w-4 h-4"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

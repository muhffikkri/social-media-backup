import { NavLink, Link } from "react-router-dom";
import handleShowToast from "../../functions/showToast";
import updatePath from "../../functions/updatePath";
import { useState } from "react";
export default function Navbar({
  isDarkMode,
  setDarkMode,
  activePage,
  setActivePage,
}) {
  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
    document.getElementsByTagName("html")[0].classList.toggle("dark");
  }
  let path = "";
  const [showSettings, setShowSettings] = useState(false);

  // !localStorage.getItem("user")
  //   ? handleShowToast("error", "Please login first!")
  //   : (path = updatePath(localStorage.getItem("picturePath")));

  return (
    <>
      <nav className="nav-container">
        <NavLink
          to="/home"
          className="nav-brand cursor-pointer"
          onClick={() => {
            setActivePage("home-page");
          }}
        >
          SociaLink
        </NavLink>
        <div className="w-1/2 flex justify-end items-center text-l-text dark:text-d-text">
          <img
            src={`./icons/${isDarkMode ? "d-sunny" : "l-moon"}.svg`}
            alt="toggle dark mode"
            className="nav-icon mx-2"
            onClick={toggleDarkMode}
          />
          <section className="flex justify-end">
            <img
              src={`./icons/${isDarkMode ? "d-" : "l-"}settings.svg`}
              alt="settings"
              className="hover:rotate-90 nav-icon relative "
              onClick={() => setShowSettings(!showSettings)}
            />
            {!showSettings ? (
              ""
            ) : (
              <div className="dynamic-primary border-solid border-[0.5px] border-d-text dark:border-opacity-20 absolute right-[5px] bottom-[-85px] w-40  shadow-2xl rounded-lg animate-slide-bottom overflow-hidden ">
                <Link to="/about" className="font-semibold">
                  <li className="px-2 flex items-center  cursor-pointer gap-1 pt-2 pb-2 hover:bg-l-secondary dark:hover:bg-d-secondary ">
                    <p className="dynamic-text ">About</p>
                    <img
                      src={`./icons/${isDarkMode ? "d-" : "l-"}about.svg`}
                      alt="about"
                      className="h-6 w-6"
                    />
                  </li>
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
                    <p className="text-l-danger dark:text-d-danger ">
                      Delete Account
                    </p>
                    <img
                      src={`./icons/${isDarkMode ? "d-" : "l-"}trash.svg`}
                      alt="Delete Account"
                      className="h-[20px] w-[20px]"
                    />
                  </li>
                </Link>
              </div>
            )}
          </section>
        </div>
      </nav>
      {/* End navbar */}

      {/* Sidebar */}
      <aside className="sidebar-container">
        <NavLink
          to="/home"
          className={`container-sidebar-icon xl:order-3 ${
            activePage === "home-page" ? "dynamic-secondary" : ""
          }`}
        >
          <img
            src={`./icons/${
              activePage === "home-page" ? "active-" : isDarkMode ? "d-" : "l-"
            }home.svg`}
            alt="home"
            className="sidebar-icon"
          />
          <p
            className={`hidden xl:block text-xl px-1 xl:-mb-1 ${
              activePage === "home-page"
                ? "font-bold dark:text-d-accent text-l-accent"
                : "font-semibold dynamic-text"
            }`}
          >
            Home
          </p>
        </NavLink>

        <hr className="hr order-2" />
        <NavLink
          to="/search-page"
          className={`container-sidebar-icon xl:order-1 mb-0 ${
            activePage === "search-page" ? "dynamic-secondary" : ""
          }`}
        >
          <img
            src={`./icons/${
              activePage === "search-page"
                ? "active-"
                : isDarkMode
                ? "d-"
                : "l-"
            }search.svg`}
            alt="search"
            className="sidebar-icon"
          />
          <p
            className={`sidebar-text ${
              activePage === "search-page"
                ? "dark:text-d-accent text-l-accent font-bold"
                : "font-semibold dynamic-text"
            }`}
          >
            Search
          </p>
        </NavLink>
        <NavLink
          to="/post"
          className={`container-sidebar-icon xl:order-4 ${
            activePage === "post-page" ? "dynamic-secondary" : ""
          }`}
        >
          <img
            src={`./icons/${
              activePage === "post-page" ? "active-" : isDarkMode ? "d-" : "l-"
            }post.svg`}
            alt="post"
            className="sidebar-icon"
          />
          <p
            className={`sidebar-text ${
              activePage === "post-page"
                ? "dark:text-d-accent text-l-accent font-bold"
                : "font-semibold dynamic-text"
            }`}
          >
            Post
          </p>
        </NavLink>
        <NavLink
          to="/notification"
          className={`container-sidebar-icon xl:order-5 ${
            activePage === "notification-page" ? "dynamic-secondary" : ""
          }`}
        >
          <img
            src={`./icons/${
              activePage === "notification-page"
                ? "active-"
                : isDarkMode
                ? "d-"
                : "l-"
            }notification.svg`}
            alt="notification"
            className="sidebar-icon"
          />
          <p
            className={`sidebar-text ${
              activePage === "notification-page"
                ? "dark:text-d-accent text-l-accent font-bold"
                : "font-semibold dynamic-text"
            }`}
          >
            Notification
          </p>
        </NavLink>
        <NavLink
          to="/profile"
          className={`w-12 h-12 dark:hover:bg-d-secondary hover:bg-l-secondary transition-300 rounded p-2 cursor-pointer md:w-16 md:h-16 md:p-3 xl:flex xl:items-center xl:justify-start xl:w-full xl:p-2 xl:rounded-lg xl:h-14 xl:order-5 ${
            activePage === "profile-page" ? "dynamic-secondary" : ""
          }`}
        >
          <img
            src={
              localStorage.getItem("picturePath") !== ""
                ? `http://localhost:3001/${path}`
                : "/images/default-profile-picture.png"
            }
            alt="profile"
            className="w-full h-full rounded-full xl:w-14 xl:h-14 xl:p-2"
          />
          <p
            className={`sidebar-text ${
              activePage === "profile-page"
                ? "dark:text-d-accent text-l-accent font-bold"
                : "font-semibold dynamic-text"
            }`}
          >
            Profile
          </p>
        </NavLink>
        <hr className="hr order-6" />
      </aside>
      {/* End sidebar */}
    </>
  );
}

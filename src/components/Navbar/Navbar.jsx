import { NavLink } from "react-router-dom";
<<<<<<< HEAD:src/components/Navbar.jsx
import handleShowToast from "../functions/showToast";
import updatePath from "../functions/updatePath";
export default function Navbar({ isDarkMode, setDarkMode, activePage, setActivePage }) {
  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
    document.getElementsByTagName("html")[0].classList.toggle("dark");
  }
  let path = "";
  !localStorage.getItem("user") ? handleShowToast("error", "Please login first!") : (path = updatePath(localStorage.getItem("picturePath")));
  console.log(path);
=======
import handleShowToast from "../../functions/showToast";
import updatePath from "../../functions/updatePath"
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
	!localStorage.getItem("user")
		? handleShowToast("error", "Please login first!")
		: (path = updatePath(localStorage.getItem("picturePath")));
	console.log(path);
>>>>>>> 186907dbeeceabaea1753e9b44ffe4d35f1317b0:src/components/Navbar/Navbar.jsx

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
          <img src={`./icons/${isDarkMode ? "d-sunny" : "l-moon"}.svg`} alt="toggle dark mode" className="nav-icon mx-2" onClick={toggleDarkMode} />

          <img src={`./icons/${isDarkMode ? "d-" : "l-"}settings.svg`} alt="settings" className="nav-icon" />
        </div>
      </nav>
      {/* End navbar */}

      {/* Sidebar */}
      <aside className="sidebar-container">
        <NavLink to="/home" className={`container-sidebar-icon xl:order-3 ${activePage === "home-page" ? "dynamic-secondary" : ""}`}>
          <img src={`./icons/${activePage === "home-page" ? "active-" : isDarkMode ? "d-" : "l-"}home.svg`} alt="home" className="sidebar-icon" />
          <p className={`hidden xl:block text-xl px-1 xl:-mb-1 ${activePage === "home-page" ? "font-bold dark:text-d-accent text-l-accent" : "font-semibold dynamic-text"}`}>Home</p>
        </NavLink>

        <hr className="hr order-2" />
        <NavLink to="/search-page" className={`container-sidebar-icon xl:order-1 mb-0 ${activePage === "search-page" ? "dynamic-secondary" : ""}`}>
          <img src={`./icons/${activePage === "search-page" ? "active-" : isDarkMode ? "d-" : "l-"}search.svg`} alt="search" className="sidebar-icon" />
          <p className={`sidebar-text ${activePage === "search-page" ? "dark:text-d-accent text-l-accent font-bold" : "font-semibold dynamic-text"}`}>Search</p>
        </NavLink>
        <NavLink to="/post" className={`container-sidebar-icon xl:order-4 ${activePage === "post-page" ? "dynamic-secondary" : ""}`}>
          <img src={`./icons/${activePage === "post-page" ? "active-" : isDarkMode ? "d-" : "l-"}post.svg`} alt="post" className="sidebar-icon" />
          <p className={`sidebar-text ${activePage === "post-page" ? "dark:text-d-accent text-l-accent font-bold" : "font-semibold dynamic-text"}`}>Post</p>
        </NavLink>
        <NavLink to="/notification" className={`container-sidebar-icon xl:order-5 ${activePage === "notification-page" ? "dynamic-secondary" : ""}`}>
          <img src={`./icons/${activePage === "notification-page" ? "active-" : isDarkMode ? "d-" : "l-"}notification.svg`} alt="notification" className="sidebar-icon" />
          <p className={`sidebar-text ${activePage === "notification-page" ? "dark:text-d-accent text-l-accent font-bold" : "font-semibold dynamic-text"}`}>Notification</p>
        </NavLink>
        <NavLink
          to="/profile"
          className={`w-12 h-12 dark:hover:bg-d-secondary hover:bg-l-secondary transition-300 rounded p-2 cursor-pointer md:w-16 md:h-16 md:p-3 xl:flex xl:items-center xl:justify-start xl:w-full xl:p-2 xl:rounded-lg xl:h-14 xl:order-5 ${
            activePage === "profile-page" ? "dynamic-secondary" : ""
          }`}
        >
          <img src={localStorage.getItem("picturePath") !== "" ? `http://localhost:3001/${path}` : "/images/default-profile-picture.png"} alt="profile" className="w-full h-full rounded-full xl:w-14 xl:h-14 xl:p-2" />
          <p className={`sidebar-text ${activePage === "profile-page" ? "dark:text-d-accent text-l-accent font-bold" : "font-semibold dynamic-text"}`}>Profile</p>
        </NavLink>
        <hr className="hr order-6" />
      </aside>
      {/* End sidebar */}
    </>
  );
}

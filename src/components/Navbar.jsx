import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Navbar({ activePage }) {
	const [isDarkMode, setDarkMode] = useState(true);
	function toggleDarkMode() {
		setDarkMode(!isDarkMode);
		document.getElementsByTagName("html")[0].classList.toggle("dark");
	}
	return (
		<>
			<nav className="nav-container">
				<NavLink to="/home" className="nav-brand cursor-pointer">
					SociaLink
				</NavLink>
				<div className="w-1/2 flex justify-end items-center text-l-text dark:text-d-text">
					<img
						src={`./icons/${isDarkMode ? "d-sunny" : "moon"}.svg`}
						alt="toggle dark mode"
						className="nav-icon mx-2"
						onClick={toggleDarkMode}
					/>
					<img
						src={`./icons/${isDarkMode ? "d-" : ""}settings.svg`}
						alt="settings"
						className="nav-icon"
					/>
				</div>
			</nav>
			{/* End navbar */}

			{/* Sidebar */}
			<aside className="sidebar-container">
				<NavLink
					to="/home"
					className={`container-sidebar-icon xl:order-3 ${
						activePage === "home" ? "dark:bg-d-secondary bg-l-secondary" : ""
					}`}
				>
					<img
						src={`./icons/home${activePage === "home" ? "-active" : ""}.svg`}
						alt="home"
						className="sidebar-icon"
					/>
					<p
						className={`hidden xl:block text-xl px-1 xl:-mb-1 ${
							activePage === "home"
								? "font-bold dark:text-d-accent text-l-accent"
								: "font-semibold dark:text-d-text text-l-text"
						}`}
					>
						Home
					</p>
				</NavLink>

				<hr className="hr order-2" />
				<NavLink
					to="/search-page"
					className={`container-sidebar-icon xl:order-1 mb-0 ${
						activePage === "search-page"
							? "dark:bg-d-secondary bg-l-secondary"
							: ""
					}`}
				>
					<img
						src={`./icons/d-search${
							activePage === "search-page" ? "-active" : ""
						}.svg`}
						alt="home"
						className="sidebar-icon"
					/>
					<p
						className={`sidebar-text ${
							activePage === "search-page"
								? "dark:text-d-accent text-l-accent font-bold"
								: "font-semibold dark:text-d-text text-l-text"
						}`}
					>
						Search
					</p>
				</NavLink>
				<NavLink
					to="/post"
					className={`container-sidebar-icon xl:order-4 ${
						activePage === "post" ? "dark:bg-d-secondary bg-l-secondary" : ""
					}`}
				>
					<img
						src={`./icons/d-post${activePage === "post" ? "-active" : ""}.svg`}
						alt="post"
						className="sidebar-icon"
					/>
					<p
						className={`sidebar-text ${
							activePage === "post"
								? "dark:text-d-accent text-l-accent font-bold"
								: "font-semibold dark:text-d-text text-l-text"
						}`}
					>
						Post
					</p>
				</NavLink>
				<NavLink
					to="/notification"
					className={`container-sidebar-icon xl:order-5 ${
						activePage === "notification"
							? "dark:bg-d-secondary bg-l-secondary"
							: ""
					}`}
				>
					<img
						src={`./icons/d-notifications${
							activePage === "notification" ? "-active" : ""
						}.svg`}
						alt="home"
						className="sidebar-icon"
					/>
					<p
						className={`sidebar-text ${
							activePage === "notification"
								? "dark:text-d-accent text-l-accent font-bold"
								: "font-semibold dark:text-d-text text-l-text"
						}`}
					>
						Notification
					</p>
				</NavLink>
				<NavLink
					to="/profile"
					className={`w-12 h-12 dark:hover:bg-d-secondary hover:bg-l-secondary transition-300 rounded p-2 cursor-pointer md:w-16 md:h-16 md:p-3 xl:flex xl:items-center xl:justify-start xl:w-full xl:p-2 xl:rounded-lg xl:h-14 xl:order-5 ${
						activePage === "profile" ? "dark:bg-d-secondary bg-l-secondary" : ""
					}`}
				>
					<img
						src="/images/default-profile-picture.png"
						alt="home"
						className="w-full h-full rounded-full xl:w-14 xl:h-14 xl:p-2"
					/>
					<p
						className={`sidebar-text ${
							activePage === "profile"
								? "dark:text-d-accent text-l-accent font-bold"
								: "font-semibold dark:text-d-text text-l-text"
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

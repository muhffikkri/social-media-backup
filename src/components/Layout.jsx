// components/Layout.js
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
export default function Layout() {
	const [isDarkMode, setDarkMode] = useState(true);
	const [userData, setUserData] = useState(null);

	return (
		<>
			<Navbar
				isDarkMode={isDarkMode}
				setDarkMode={setDarkMode}
				userData={userData}
			/>
			<Outlet context={{ isDarkMode, userData, setUserData }} />
		</>
	);
}

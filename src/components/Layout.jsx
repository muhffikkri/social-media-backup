// components/Layout.js
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
export default function Layout() {
	const [isDarkMode, setDarkMode] = useState(true);

	return (
		<>
			<Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
			<Outlet context={{ isDarkMode }} />
		</>
	);
}

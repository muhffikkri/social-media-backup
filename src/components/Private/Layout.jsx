// components/Layout.js
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
export default function Layout() {
  const [isDarkMode, setDarkMode] = useState(true);
  const [activePage, setActivePage] = useState("home-page");
  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <Outlet context={{ isDarkMode, setActivePage }} />
    </>
  );
}

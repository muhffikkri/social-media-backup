import { Route, Routes } from "react-router-dom";
import Error from "./pages/Public/Error";
import Login from "./pages/Public/Login";
import SignUp from "./pages/Public/SignUp";
import CreateProfile from "./pages/Private/CreateProfile";
import Layout from "./components/Private/Layout";
import HomePage from "./pages/private/HomePage";
import CreatePostPage from "./pages/private/CreatePostPage";
import NotificationPage from "./pages/Private/NotificationPage";
import ProfilePage from "./pages/private/ProfilePage";
import SearchPage from "./pages/private/SearchPage";
import AboutPage from "./pages/Private/AboutPage";

import handleShowToast from "./functions/showToast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login handleShowToast={handleShowToast} />} />
        <Route path="/login" element={<Login handleShowToast={handleShowToast} />} />
        <Route path="/signup" element={<SignUp handleShowToast={handleShowToast} />} />
        <Route path="/create" element={<CreateProfile handleShowToast={handleShowToast} />} />
        {/* Routes that need Navbar */}
        <Route element={<Layout />}>
          <Route path="/post" element={<CreatePostPage handleShowToast={handleShowToast} />} />
          <Route path="/home" element={<HomePage handleShowToast={handleShowToast} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/search-page" element={<SearchPage handleShowToast={handleShowToast} />} />
          <Route path="/about" element={<AboutPage handleShowToast={handleShowToast} />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme="dark" />
    </>
  );
}

export default App;

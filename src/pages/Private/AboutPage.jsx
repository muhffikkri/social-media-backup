import { useState } from "react";
import Marquee from "react-fast-marquee";
import { useOutletContext } from "react-router-dom";

export default function AboutPage() {
  const { isDarkMode, setActivePage } = useOutletContext();
  const [showMinorDetails, setShowMinorDetails] = useState(false);
  setActivePage("about-page");
  return (
    <>
      <div className="xl:flex mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-between p-4 ">
        <div className=" w-full p-8 h-full mx-auto dynamic-primary rounded-lg">
          <section className="center gap-1">
            <h1 className="dynamic-text font-bold text-2xl">About</h1>
            <img
              src={`./icons/${isDarkMode ? "d-" : "l-"}about.svg`}
              alt="about logo"
              className="w-8 h-8 mt-1"
            />
          </section>
          <hr className="border-t-[1px] border-l-text dark:border-d-text w-full rounded-xl opacity-40 my-4" />
          <section>
            <p className="text-justify indent-6 dynamic-text font-medium text-lg">
              Welcome to SociaLink! Our social media platform is here to help
              you connect with friends and the world around you. Share your
              thoughts, photos, and special moments in an engaging space where
              you can also interact with posts from others.
            </p>
            <div className="dynamic-secondary rounded-md p-3 mt-2">
              <p className=" font-bold dynamic-text text-lg">Features:</p>
              <ul className="list-disc ml-8 mb-2">
                <li className="dynamic-text font-semibold text-lg">
                  Sign Up or Log In:
                  <span className="font-normal ml-2 dynamic-text">
                    Quickly create an account or sign in to access the app.
                  </span>
                </li>

                <li className="dynamic-text font-semibold text-lg">
                  Share a Post:
                  <span className="font-normal ml-2 dynamic-text">
                    Post updates, photos, or thoughts with your friends and
                    followers.
                  </span>
                </li>
                <li className="dynamic-text font-semibold text-lg">
                  Like, Comment, and Share:
                  <span className="font-normal ml-2 dynamic-text">
                    Interact with posts by liking, commenting, or sharing.
                  </span>
                </li>

                <li className="dynamic-text font-semibold text-lg">
                  Manage Your Profile:
                  <span className="font-normal ml-2 dynamic-text">
                    Easily update and manage your account details.
                  </span>
                </li>
                <li className="dynamic-text font-semibold text-lg">
                  Infinite Scrolling:
                  <span className="font-normal ml-2 dynamic-text">
                    Enjoy a never-ending feed of content to explore.
                  </span>
                </li>
                <li className="dynamic-text font-semibold text-lg">
                  Search Friends or Posts:
                  <span className="font-normal ml-2 dynamic-text">
                    Search for friends or posts using names or hashtags.
                  </span>
                </li>
              </ul>
              <div
                className="flex gap-1 cursor-pointer"
                onClick={() => setShowMinorDetails(!showMinorDetails)}
              >
                <p className="dynamic-text font-bold text-lg">Minor Features</p>
                <img
                  src={`./icons/${isDarkMode ? "d-" : "l-"}chevron.svg`}
                  alt="drop-list"
                  className={`w-6 h-6 mt-1 ${showMinorDetails && "-rotate-90"}`}
                />
              </div>
              {showMinorDetails && (
                <ul className="list-disc ml-8 mb-2">
                  <li className="dynamic-text font-semibold text-lg">
                    Switch Themes:
                    <span className="font-normal ml-2 dynamic-text">
                      Choose between light or dark mode to match your
                      preference.
                    </span>
                  </li>
                  <li className="dynamic-text font-semibold text-lg">
                    Stay Notified:
                    <span className="font-normal ml-2 dynamic-text">
                      Get real-time alerts to keep up with what’s happening.
                    </span>
                  </li>
                  <li className="dynamic-text font-semibold text-lg">
                    Log Out or Delete Account:
                    <span className="font-normal ml-2 dynamic-text">
                      Log out when you're done, or delete your account if you
                      decide to leave.
                    </span>
                  </li>
                </ul>
              )}
            </div>
          </section>
          <hr className="border-t-[1px] border-l-text dark:border-d-text w-full rounded-xl opacity-40 my-4" />

          <section className="flex flex-col">
            <p className="font-bold text-lg dynamic-text mb-2">Created By:</p>

            <p className="dynamic-text font-semibold text-lg flex">
              Rafi Fernanda
              <span className="font-normal mx-2 dynamic-text">
                as a Full-stack Developer
              </span>
              <a href="https://www.instagram.com/rafi_feranda/" target="_blank">
                <img
                  src="./icons/icon-instagram.svg"
                  alt="instagram"
                  className=" w-7 h-7 mr-1"
                />
              </a>
              <a href="https://github.com/RandDevs" target="_blank">
                <img
                  src="./icons/icon-github.svg"
                  alt="github"
                  className=" w-7 h-7 dark:bg-d-text rounded-md"
                />
              </a>
            </p>
            <p className="dynamic-text font-semibold text-lg flex">
              Fikri
              <span className="font-normal mx-2 dynamic-text">
                as a Front-end Developer
              </span>
              <a href="https://www.instagram.com/muhffikkri/" target="_blank">
                <img
                  src="./icons/icon-instagram.svg"
                  alt="instagram"
                  className=" w-7 h-7 mr-1"
                />
              </a>
              <a href="https://github.com/muhffikkri" target="_blank">
                <img
                  src="./icons/icon-github.svg"
                  alt="github"
                  className=" w-7 h-7 dark:bg-d-text rounded-md"
                />
              </a>
            </p>
            <p className="dynamic-text font-semibold text-lg flex">
              M Fais Hasan
              <span className="font-normal mx-2 dynamic-text">
                as a Designer
              </span>
              <a href="https://www.instagram.com/faiz_hasan_/" target="_blank">
                <img
                  src="./icons/icon-instagram.svg"
                  alt="instagram"
                  className=" w-7 h-7"
                />
              </a>
            </p>
          </section>
          <hr className="border-t-[1px] border-l-text dark:border-d-text w-full rounded-xl opacity-40 my-4" />
          <section>
            <p className="dynamic-text font-bold text-xl center">Build With</p>
            <div className="dynamic-secondary rounded-md  mt-2 py-4">
              <Marquee
                className="w-full h-full "
                autoFill="true"
                pauseOnHover="true"
              >
                <a href="https://www.mongodb.com/" target="_blank">
                  <img
                    src="./icons/icon-mongodb.svg"
                    alt="MongoDB"
                    className="h-10 mx-[34px]"
                  />
                </a>
                <a href="https://expressjs.com/" target="_blank">
                  <img
                    src="./icons/icon-express.svg"
                    alt="ExpressJS"
                    className="h-10 mx-[34px] bg-d-text rounded-sm"
                  />
                </a>
                <a href="https://react.dev/" target="_blank">
                  <img
                    src="./icons/icon-react.svg"
                    alt="ReactJS"
                    className="h-10 mx-[34px] bg-d-secondary rounded-sm"
                  />
                </a>
                <a href="https://nodejs.org/en" target="_blank">
                  <img
                    src="./icons/icon-nodejs.svg"
                    alt="NodeJS"
                    className="w-10 h-10 mx-[34px]"
                  />
                </a>
                <a href="https://vitejs.dev/" target="_blank">
                  <img
                    src="./icons/icon-vite.svg"
                    alt="ReactJS"
                    className="h-10 mx-[34px]"
                  />
                </a>
                <a href="https://axios-http.com/" target="_blank">
                  <img
                    src="./icons/icon-axios.svg"
                    alt="Axios"
                    className="bg-d-text rounded-sm h-10 mx-[34px]"
                  />
                </a>
                <a href="https://tailwindcss.com/" target="_blank">
                  <img
                    src="./icons/icon-tailwind.svg"
                    alt="TailwindCSS"
                    className="w-10 h-10 mx-[34px]"
                  />
                </a>
                <a href="https://www.figma.com/" target="_blank">
                  <img
                    src="./icons/icon-figma.svg"
                    alt="Figma"
                    className="w-10 h-10 mx-[34px]"
                  />
                </a>
              </Marquee>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

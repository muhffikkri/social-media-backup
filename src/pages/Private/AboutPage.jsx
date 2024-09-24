import { useState } from "react";
import Marquee from "react-fast-marquee";
import { useOutletContext } from "react-router-dom";

export default function AboutPage() {
  const { isDarkMode, setActivePage } = useOutletContext();
  const [showMinorDetails, setShowMinorDetails] = useState(false);
  setActivePage("about-page");
  return (
    <>
      <div className="xl:flex mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-between p-4 md:pb-8 pb-16">
        <div className=" w-full xl:p-8 p-4 h-full mx-auto dynamic-primary rounded-lg">
          <section className="center gap-1">
            <h1 className="dynamic-text font-bold xl:text-2xl md:text-xl text-xl">
              About
            </h1>
            <img
              src={`./icons/${isDarkMode ? "d-" : "l-"}about.svg`}
              alt="about logo"
              className="xl:w-8 xl:h-8 w-7 h-7 xl:mt-1 mt-[2px]"
            />
          </section>
          <hr className="border-t-[1px] border-l-text dark:border-d-text w-full rounded-xl opacity-40 xl:my-4 my-3" />
          <section>
            <p className="text-justify indent-6 dynamic-text font-medium xl:text-lg text-base">
              Welcome to SociaLink! Our social media platform is here to help
              you connect with friends and the world around you. Share your
              thoughts, photos, and special moments in an engaging space where
              you can also interact with posts from others.
            </p>
            <div className="dynamic-secondary rounded-md p-3 mt-2">
              <p className=" font-bold dynamic-text xl:text-lg text-base">
                Features:
              </p>
              <ul className="list-disc xl:ml-8 ml-6 mb-2">
                <li className="dynamic-text font-semibold xl:text-lg text-base xl:my-1 my-2">
                  Sign Up or Log In:
                  <span className="font-normal xl:ml-2 ml-1 dynamic-text">
                    Quickly create an account or sign in to access the app.
                  </span>
                </li>

                <li className="dynamic-text font-semibold xl:text-lg text-base xl:my-1 my-2">
                  Share a Post:
                  <span className="font-normal xl:ml-2 ml-1 dynamic-text">
                    Post updates, photos, or thoughts with your friends and
                    followers.
                  </span>
                </li>
                <li className="dynamic-text font-semibold xl:text-lg text-base xl:my-1 my-2">
                  Like, Comment, and Share:
                  <span className="font-normal xl:ml-2 ml-1 dynamic-text">
                    Interact with posts by liking, commenting, or sharing.
                  </span>
                </li>

                <li className="dynamic-text font-semibold xl:text-lg text-base xl:my-1 my-2">
                  Manage Your Profile:
                  <span className="font-normal xl:ml-2 ml-1 dynamic-text">
                    Easily update and manage your account details.
                  </span>
                </li>
                <li className="dynamic-text font-semibold xl:text-lg text-base xl:my-1 my-2">
                  Infinite Scrolling:
                  <span className="font-normal xl:ml-2 ml-1 dynamic-text">
                    Enjoy a never-ending feed of content to explore.
                  </span>
                </li>
                <li className="dynamic-text font-semibold xl:text-lg text-base xl:my-1 my-2">
                  Search Friends or Posts:
                  <span className="font-normal xl:ml-2 ml-1 dynamic-text">
                    Search for friends or posts using names or hashtags.
                  </span>
                </li>
              </ul>
              <div
                className="flex gap-1 cursor-pointer"
                onClick={() => setShowMinorDetails(!showMinorDetails)}
              >
                <p className="dynamic-text font-bold xl:text-lg text-base">
                  Minor Features
                </p>
                <img
                  src={`./icons/${isDarkMode ? "d-" : "l-"}chevron.svg`}
                  alt="drop-list"
                  className={`xl:w-6 xl:h-6 w-5 h-5 xl:mt-1 mt-[2px] mb-1 ${
                    showMinorDetails && "-rotate-90"
                  }`}
                />
              </div>
              {showMinorDetails && (
                <ul className="list-disc xl:ml-8 ml-6 mb-2">
                  <li className="dynamic-text font-semibold xl:text-lg text-base xl:my-1 my-2">
                    Switch Themes:
                    <span className="font-normal ml-2 dynamic-text">
                      Choose between light or dark mode to match your
                      preference.
                    </span>
                  </li>
                  <li className="dynamic-text font-semibold xl:text-lg text-base xl:my-1 my-2">
                    Stay Notified:
                    <span className="font-normal ml-2 dynamic-text">
                      Get real-time alerts to keep up with what’s happening.
                    </span>
                  </li>
                  <li className="dynamic-text font-semibold xl:text-lg text-base xl:my-1 my-2">
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
          <hr className="border-t-[1px] border-l-text dark:border-d-text w-full rounded-xl opacity-40 xl:my-4 my-3" />

          <section className="flex flex-col">
            <p className="font-bold xl:text-lg text-base dynamic-text mb-2">
              Created By:
            </p>

            <p className="dynamic-text font-semibold xl:text-lg text-base xl:flex">
              Rafi Fernanda
              <span className="font-normal xl:mx-2 mx-[2px] dynamic-text">
                as a Full-stack Developer
              </span>
              <a href="https://www.instagram.com/rafi_feranda/" target="_blank">
                <img
                  src="./icons/icon-instagram.svg"
                  alt="instagram"
                  className=" w-7 h-7 mr-1 inline-block"
                />
              </a>
              <a href="https://github.com/RandDevs" target="_blank">
                <img
                  src="./icons/icon-github.svg"
                  alt="github"
                  className=" w-7 h-7 dark:bg-d-text rounded-md inline-block"
                />
              </a>
            </p>
            <p className="dynamic-text font-semibold xl:text-lg text-base flex">
              Fikri
              <span className="font-normal xl:mx-2 mx-[2px] dynamic-text">
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
            <p className="dynamic-text font-semibold xl:text-lg text-base flex">
              M Fais Hasan
              <span className="font-normal xl:mx-2 mx-[2px] dynamic-text">
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
          <hr className="border-t-[1px] border-l-text dark:border-d-text w-full rounded-xl opacity-40 xl:my-4 my-3" />
          <section>
            <p className="dynamic-text font-bold xl:text-xl text-lg center">
              Build With
            </p>
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
                    className="xl:h-10 h-8 xl:mx-[34px] md:mx-7 mx-5"
                  />
                </a>
                <a href="https://expressjs.com/" target="_blank">
                  <img
                    src="./icons/icon-express.svg"
                    alt="ExpressJS"
                    className="xl:h-10 h-8 xl:mx-[34px] md:mx-7 mx-5 bg-d-text rounded-sm"
                  />
                </a>
                <a href="https://react.dev/" target="_blank">
                  <img
                    src="./icons/icon-react.svg"
                    alt="ReactJS"
                    className="xl:h-10 h-8 xl:mx-[34px] md:mx-7 mx-5 bg-d-secondary rounded-sm"
                  />
                </a>
                <a href="https://nodejs.org/en" target="_blank">
                  <img
                    src="./icons/icon-nodejs.svg"
                    alt="NodeJS"
                    className="xl:w-10 w-8- xl:h-10 h-8 xl:mx-[34px] md:mx-7 mx-5"
                  />
                </a>
                <a href="https://vitejs.dev/" target="_blank">
                  <img
                    src="./icons/icon-vite.svg"
                    alt="ReactJS"
                    className="xl:h-10 h-8 xl:mx-[34px] md:mx-7 mx-5"
                  />
                </a>
                <a href="https://axios-http.com/" target="_blank">
                  <img
                    src="./icons/icon-axios.svg"
                    alt="Axios"
                    className="bg-d-text rounded-sm xl:h-10 h-8 xl:mx-[34px] md:mx-7 mx-5"
                  />
                </a>
                <a href="https://tailwindcss.com/" target="_blank">
                  <img
                    src="./icons/icon-tailwind.svg"
                    alt="TailwindCSS"
                    className="xl:w-10 w-8- xl:h-10 h-8 xl:mx-[34px] md:mx-7 mx-5"
                  />
                </a>
                <a href="https://www.figma.com/" target="_blank">
                  <img
                    src="./icons/icon-figma.svg"
                    alt="Figma"
                    className="xl:w-10 w-8- xl:h-10 h-8 xl:mx-[34px] md:mx-7 mx-5"
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

import { useOutletContext } from "react-router-dom";
export default function ProfilePage() {
<<<<<<< HEAD
  const { setActivePage } = useOutletContext();
  setActivePage("profile-page");
  return (
    <>
      <div className="container h-16 lg:hidden"></div>
      <div className="w-[calc(100% - 288px)] sm:h-[calc(100vh-73px)] xl:ml-[288px] xl:mt-[73px]">
        <div className="w-full h-auto" id="postsContainer">
          <div className="w-full h-52 sm:h-64 flex flex-col dynamic-primary mb-2 relative">
            <div className="w-full h-1/2 sm:h-36 bg-d-text relative"></div>
            <div className="w-36 h-10 dynamic-secondary dynamic-text ml-auto mr-4 text-xl font-bold flex justify-center pt-2 mt-3 hover:dynamic-primary cursor-pointer">
              <p>Follow</p>
            </div>
            <div className="flex flex-col p-4 pb-2 absolute top-14 sm:top-24">
              <div className="w-full flex flex-col dynamic-text" id="headerPost">
                <div className="w-16 h-16 rounded-full bg-d-bgc mb-2" id="image"></div>
                <div className="flex flex-col px-2" id="nameAndLocation">
                  <p className="font-bold text-2xl">Nama</p>
                  <p className="font-semibold opacity-80">location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
=======
	const { setActivePage } = useOutletContext();
	setActivePage("profile-page");
	return <></>;
>>>>>>> a8fc88edc15f695d86abd38ad9c4e9ba1abdcd4e
}

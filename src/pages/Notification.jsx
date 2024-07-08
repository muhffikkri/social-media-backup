import Friendlist from "../components/Friendlist";
import Navbar from "../components/Navbar";

export default function Notification() {
	const activePage = "notification";
	return (
    <>
      <Navbar activePage={activePage} />
      <div className="xl:flex mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-between xl:mr-[28%]">
        {/* Main content */}
        <div className="font-open-sans w-full py-2 md:px-4 mx-auto ">
          {/* Posts container */}
          <div className="w-full h-auto mt-2 " id="postsContainer">
            <div className="w-full h-auto flex flex-col bg-d-primary rounded-xl mb-2 p-4 pb-2 text-d-text">
              <div className="text-2xl font-bold">Notification</div>

              {/* Container section */}
              <div className="w-full flex flex-col mt-2 gap-3">

                <div className="flex gap-2 content-center">
                  <div className="w-7 flex justify-center content-center">
                    <img src="./icons/d-checkmark.svg" alt="like" className="cursor-pointer w-full" />
                  </div>
                  <div className="py-1 flex text-xs gap-1">
                    <p className="font-bold">lorem ipsum </p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className="flex gap-2 p-1 content-center">
                  <div className="w-8 flex justify-center content-center">
                    <img src="./icons/d-checkmark.svg" alt="like" className="cursor-pointer w-full" />
                  </div>
                  <div className="py-1 flex text-sm">Lorem ipsum dolor sit.</div>
                </div>
              </div>

				      {/* Container Section */}
              <div className="w-full flex flex-col mt-2 gap-3">
                <div className="flex gap-2 p-1 content-center">
                  <div className="py-1 flex text-md font-bold">Hari ini</div>
                </div>

                <div className="flex gap-2 p-1 content-center">
                  <div className="w-8 h-8 flex justify-center content-center">
                    <div className="w-full h-full rounded-full bg-d-bgc" id="image"></div>
                  </div>
                  <div className="py-1 flex text-sm">Lorem ipsum dolor sit.</div>
                </div>
                
                <div className="flex gap-2 p-1 content-center">
                  <div className="w-8 h-8 flex justify-center content-center">
                    <div className="w-full h-full rounded-full bg-d-bgc" id="image"></div>
                  </div>
                  <div className="py-1 flex text-sm">Lorem ipsum dolor sit.</div>
                </div>
              </div>

              <div className="w-full flex flex-col mt-2 gap-3">
                <div className="flex gap-2 p-1 content-center">
                  <div className="py-1 flex text-md font-bold">Hari ini</div>
                </div>

                <div className="flex gap-2 p-1 content-center">
                  <div className="w-8 h-8 flex justify-center content-center">
                    <div className="w-full h-full rounded-full bg-d-bgc" id="image"></div>
                  </div>
                  <div className="py-1 flex text-sm">Lorem ipsum dolor sit.</div>
                </div>

                <div className="flex gap-2 p-1 content-center">
                  <div className="w-8 h-8 flex justify-center content-center">
                    <div className="w-full h-full rounded-full bg-d-bgc" id="image"></div>
                  </div>
                  <div className="py-1 flex text-sm">Lorem ipsum dolor sit.</div>
                </div>
              </div>

            </div>
          </div>
          {/* End Posts */}
        </div>
        {/* End main content */}
        <Friendlist />
      </div>
    </>
  );
}

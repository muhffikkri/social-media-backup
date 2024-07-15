import Friendlist from "../components/Friendlist";
import Navbar from "../components/Navbar";
import NotificationCard from "../components/NotificationCard";

export default function Notification() {
	const activePage = "notification";
	return (
		<>
			{/* <Navbar activePage={activePage} /> */}
			<div className="xl:flex mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-between xl:mr-[28%]">
				{/* Main content */}
				<div className="font-open-sans w-full py-2 md:px-4 mx-auto ">
					{/* Posts container */}
					<div className="w-full h-auto mt-2 " id="postsContainer">
						<div className="w-full h-auto flex flex-col bg-d-primary rounded-xl mb-2 p-4 pb-2 text-d-text">
							<div className="text-2xl font-bold">Notification</div>

							{/* Container section */}
							<div className="w-full flex flex-col mt-2 gap-2">
								{/* Card Section */}
								<div className="flex content-center box-border gap-2 md:gap-0">
									<div className="w-8 flex justify-center content-center md:w-12">
										<img
											src="./icons/d-checkmark.svg"
											alt="like"
											className="cursor-pointer w-full"
										/>
									</div>
									<div className="flex items-center w-3/4 ml-1 md:ml-3 sm:w-5/6 sm:text-sm lg:w-full ">
										<p className="inline-block align-bottom text-xs md:text-base">
											<span className="font-semibold">Nickname</span> Lorem
											ipsum dolor, sit amet consectetur adipisicing el
										</p>
									</div>
									<div className="bg-d-text w-10 h-10 ml-auto sm:w-12 sm:h-10 cursor-pointer"></div>
								</div>
							</div>

							<div className="w-full flex flex-col mt-2 gap-2">
								<div className="flex gap-2 p-1 content-center">
									<div className="py-1 flex text-md font-bold">Hari ini</div>
								</div>

								<NotificationCard />
								<NotificationCard />
								<NotificationCard />
								<NotificationCard />
							</div>

							<div className="w-full flex flex-col mt-2 gap-2">
								<div className="flex gap-2 p-1 content-center">
									<div className="py-1 flex text-md font-bold">Kemarin</div>
								</div>

								<NotificationCard />
								<NotificationCard />
								<NotificationCard />
								<NotificationCard />
							</div>
						</div>
					</div>
					{/* End Posts */}
				</div>
				<Friendlist />
				{/* End main content */}
			</div>
		</>
	);
}

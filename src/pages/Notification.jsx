import Friendlist from "../components/Friendlist";
import NotificationCard from "../components/NotificationCard";
import { useOutletContext } from "react-router-dom";
export default function Notification() {
	const { setActivePage } = useOutletContext();
	setActivePage("notification-page");
	return (
		<>
			<div className="xl:flex h-[calc(100lvh - 117px)] mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-between xl:mr-[28%] sm:mt-3 box-border">
				{/* Main content */}
				<div className="font-open-sans w-full md:px-4 mx-auto sm:pt-3">
					{/* Posts container */}
					<div className="w-full h-[calc(100% - 117px)]" id="postsContainer">
						<div className="w-full h-auto flex flex-col dynamic-primary sm:rounded-xl mb-2 p-4 pb-2 dynamic-text">
							<div className="text-2xl font-bold dynamic-text">
								Notification
							</div>

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
										<p className="inline-block align-bottom text-xs dynamic-text md:text-base">
											<span className="font-semibold dynamic-text">
												Nickname
											</span>{" "}
											Lorem ipsum dolor, sit amet consectetur adipisicing el
										</p>
									</div>
									<div className="bg-d-text w-10 h-10 ml-auto sm:w-12 sm:h-10 cursor-pointer"></div>
								</div>
							</div>

							<div className="w-full flex flex-col mt-2 gap-2">
								<div className="flex gap-2 p-1 content-center">
									<div className="py-1 flex text-md font-bold dynamic-text">
										Hari ini
									</div>
								</div>

								<NotificationCard />
								<NotificationCard />
								<NotificationCard />
								<NotificationCard />
							</div>

							<div className="w-full flex flex-col mt-2 gap-2">
								<div className="flex gap-2 p-1 content-center">
									<div className="py-1 flex text-md font-bold dynamic-text">
										Kemarin
									</div>
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

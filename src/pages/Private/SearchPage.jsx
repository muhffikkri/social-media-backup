import { useRef, useState } from "react";
import Friendlist from "../../components/Private/Friendlist";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
export default function SearchPage({ handleShowToast }) {
	const [users, setUsers] = useState({});
	const { setActivePage } = useOutletContext();
	const searchQuery = useRef();
	setActivePage("search-page");

	const searchUsers = async (displayName) => {
		try {
			await axios
				.post("http://localhost:3001/api/search/hashtags", {
					userId: localStorage.getItem("user"),
					displayName,
				})
				.then((res) => {
					setUsers(res.data.users);
					console.log(res.data);
				})
				.catch((err) => {
					console.error(err.response.data);
					handleShowToast(err.response.data.status, err.response.data.msg);
				});
		} catch (err) {
			console.error(err);
			handleShowToast("error", "Something went wrong, please try again later!");
		}
	};

	const searchHashtags = async (hashtag) => {
		try {
			await axios
				.post("http://localhost:3001/api/search/hashtags", {
					hashtag,
				})
				.then((res) => {
					setUsers(res.data.posts);
					console.log(res.data);
				})
				.catch((err) => {
					console.error(err.response.data);
					handleShowToast(err.response.data.status, err.response.data.msg);
				});
		} catch (err) {
			console.error(err);
			handleShowToast("error", "Something went wrong, please try again later!");
		}
	};
	return (
		<>
			<div className="xl:flex mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-between xl:mr-[28%]">
				{/* Main content */}
				<div className="font-open-sans w-full py-2 px-4 mx-auto ">
					{/* Posts container */}
					<div className="w-full h-auto mt-2 " id="postsContainer">
						<div className="w-full h-auto flex mb-4">
							<input
								type="text"
								ref={searchQuery}
								className="rounded-xl dynamic-primary w-full h-12 p-2 pl-4 dynamic-text text-lg focus:ring-2 focus:ring-d-accent outline-none"
								placeholder="Search Your Friends Or Hashtags!"
							/>
						</div>

						<div className="w-full h-52 sm:h-64 flex flex-col dynamic-primary rounded-xl mb-2 relative">
							<div className="w-full h-1/2 sm:h-36 rounded-2xl bg-d-text relative"></div>
							<div className="w-36 h-10 dynamic-secondary dynamic-text ml-auto mr-4 text-xl font-bold flex justify-center pt-2 mt-3 rounded-full hover:dynamic-primary cursor-pointer">
								<p>+ Add Friend</p>
							</div>
							<div className="flex flex-col p-4 pb-2 absolute top-14 sm:top-24">
								<div className="w-full flex flex-col" id="headerPost">
									<div
										className="w-16 h-16 rounded-full bg-d-bgc mb-2"
										id="image"
									></div>
									<div
										className="flex flex-col px-2 text-d-text"
										id="nameAndLocation"
									>
										<p className="font-bold text-2xl">Nama</p>
										<p className="font-semibold opacity-80">location</p>
									</div>
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

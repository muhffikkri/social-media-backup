import { useLocation, useOutletContext } from "react-router-dom";
import Friendlist from "../components/Friendlist";
import Post from "../components/Post";
// import { useEffect } from "react";

export default function Home({ handleShowToast }) {
	const { isDarkMode } = useOutletContext();
	// const { userData, setUserData } = useOutletContext();
	// const LOCATION = useLocation();
	// useEffect(() => {
	// 	const fetchUserData = async () => {
	// 		try {
	// 			return fetch("http://localhost:3000/home", {
	// 				method: "POST",
	// 				headers: {
	// 					"Content-Type": "application/json",
	// 				},
	// 				body: JSON.stringify({ _id: LOCATION.state._id }),
	// 			})
	// 				.then((response) => response.json())
	// 				.then((response) => {
	// 					setUserData(response.user);
	// 					console.log(userData);
	// 				});
	// 		} catch (error) {
	// 			handleShowToast("error", error.msg);
	// 			console.error("Error fetching user data:", error);
	// 		}
	// 	};
	// 	console.log("Rendered");
	// 	fetchUserData();
	// }, []);

	return (
		<>
			<div className="xl:flex mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-between xl:mr-[28%]">
				{/* Main content */}
				<div className="font-open-sans w-full py-2 px-4 mx-auto pb-[54px] md:pb-[72px] xl:pb-0">
					{/* Posts container */}
					<div className="w-full h-auto mb-2 " id="postsContainer">
						<Post isDarkMode={isDarkMode} />
						<Post isDarkMode={isDarkMode} />
						<Post isDarkMode={isDarkMode} />
					</div>
					{/* End Posts */}
				</div>
				{/* End main content */}

				<Friendlist />
			</div>
		</>
	);
}

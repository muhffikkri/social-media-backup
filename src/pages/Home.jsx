import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Friendlist from "../components/Friendlist";
import Post from "../components/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

export default function Home({ handleShowToast }) {
	const { isDarkMode } = useOutletContext();
	const [items, setItems] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		axios
			.post("http://localhost:3000/get/post", null, {
				params: { index, limit: 4 },
			})
			.then((res) => {
				setItems(res.data.data);
				setIndex((prevIndex) => prevIndex + 2);
			})
			.catch((err) => console.log(err));
	}, []);

	const fetchMoreData = async () => {
		await axios
			.post("http://localhost:3000/get/post", null, {
				params: { index, limit: 4 },
			})
			.then((res) => {
				setItems((prevItems) => [...prevItems, ...res.data.data]);

				res.data.length > 0 ? setHasMore(true) : setHasMore(false);
			})
			.catch((err) => console.log(err));

		setIndex((prevIndex) => prevIndex + 4);
	};
	return (
		<>
			<div className="xl:flex mt-[61px] md:mt-[73px] xl:ml-[288px] xl:justify-between xl:mr-[28%]">
				{/* Main content */}
				<div className="font-open-sans w-full py-2 px-4 mx-auto pb-[54px] md:pb-[72px] xl:pb-0">
					{/* Posts container */}
					<InfiniteScroll
						dataLength={items.length}
						next={fetchMoreData}
						hasMore={hasMore}
						loader={<h4 className="dynamic-text center">Loading...</h4>}
						endMessage={
							<p className="dynamic-text w-full center p-2">
								<b>Yay! You have seen it all</b>
							</p>
						}
					>
						{items.map((item, index) => (
							<div
								className="w-full h-auto mb-2 "
								id="postsContainer"
								key={index}
							>
								<Post isDarkMode={isDarkMode} item={item} />
							</div>
						))}
					</InfiniteScroll>

					{/* End Posts */}
				</div>
				{/* End main content */}

				<Friendlist />
			</div>
		</>
	);
}

import { useState } from "react";
import CommentsSection from "./CommentSection";
import handleShowToast from "../functions/showToast";
import axios from "axios";

export default function Post({ isDarkMode, item }) {
	const [hasLiked, setHasLiked] = useState(
		item.likedBy.includes(localStorage.getItem("user"))
	);
	const [likes, setLikes] = useState(item.likes);
	const [commentActive, setCommentActive] = useState(false);
	const [optimisticLikes, setOptimisticLikes] = useState(likes);
	const imagePost = item.imagePath.replace(/^public\\/, "").replace(/\\/g, "/");

	const handleLikePost = async () => {
		setHasLiked(true);
		setOptimisticLikes((prevLikes) => prevLikes + 1);
		try {
			const response = await axios.post(
				`http://localhost:3000/posts/${item._id}/like`,
				{ userId: item.userId }
			);

			setLikes(response.data.likes);
			setOptimisticLikes(response.data.likes);
		} catch (err) {
			setHasLiked(false);
			setOptimisticLikes((prevLikes) => prevLikes - 1);
			console.error("Error liking the post:", error);
		}
	};
	const handleUnlikePost = async () => {
		setHasLiked(false);
		setOptimisticLikes((prevLikes) => prevLikes - 1);
		try {
			const response = await axios.post(
				`http://localhost:3000/posts/${item._id}/unlike`,
				{
					userId: item.userId,
				}
			);

			setLikes(response.data.likes);
			setOptimisticLikes(response.data.likes);
		} catch (error) {
			setHasLiked(true);
			setOptimisticLikes((prevLikes) => prevLikes + 1);
			console.error("Error unliking the post:", error);
		}
	};

	return (
		<>
			{commentActive ? (
				<CommentsSection
					setCommentActive={setCommentActive}
					isDarkMode={isDarkMode}
				/>
			) : (
				""
			)}

			<div className="w-full h-auto flex flex-col dynamic-primary rounded-xl mb-2">
				<div className="flex flex-col p-4 pb-2">
					<div className="w-full h-14 flex items-center" id="headerPost">
						<div
							className="w-12 h-12 rounded-full dynamic-bg cursor-pointer"
							id="image"
						>
							<img
								src={
									item.picturePath
										? `http://localhost:3000/${item.picturePath
												.replace(/^public\\/, "")
												.replace(/\\/g, "/")}`
										: "/images/default-profile-picture.png"
								}
								alt="profile pict"
								className="rounded-full"
							/>
						</div>
						<div
							className="flex flex-col px-2 dynamic-text"
							id="nameAndLocation"
						>
							<p className="font-bold text-xl cursor-pointer dynamic-text text-ellipsis whitespace-nowrap overflow-hidden">
								{item.displayName}
							</p>
							<p className="font-semibold opacity-80 dynamic-text">
								{item.location}
							</p>
						</div>
					</div>
					<div className="w-full h-auto pt-2">
						<p className="dynamic-text text-lg text-left">{item.description}</p>
						<div className="text-l-accent dark:text-d-accent text-lg font-semibold py-1 flex flex-row gap-1">
							{item.hashtags.map((hashtag, index) => {
								return (
									<p key={index} className="cursor-pointer">
										{hashtag}
									</p>
								);
							})}
						</div>
					</div>
				</div>
				<div className="w-full mb-2 md:mb-4 flex justify-center">
					<img src={`http://localhost:3000/${imagePost}`} alt="" />
				</div>
				<div
					className="w-full h-[40px] md:h-[50px] flex flex-row px-2 pb-2 md:pb-4 gap-1"
					id="likes"
				>
					<div className="flex flex-row justify-center leading-3">
						<img
							src={`./icons/${
								hasLiked ? "active-" : isDarkMode ? "d-" : "l-"
							}like.svg`}
							alt="like"
							className="cursor-pointer w-15"
							onClick={async () => {
								hasLiked ? handleUnlikePost() : handleLikePost();
							}}
						/>
						<p className="dynamic-text font-semibold text-lg pl-1 self-center">
							{optimisticLikes}
						</p>
					</div>
					<div className="flex flex-row justify-center">
						<img
							src={`./icons/${isDarkMode ? "d-" : "l-"}comment.svg`}
							alt="comment"
							className="cursor-pointer"
							onClick={() => setCommentActive(!commentActive)}
						/>
						<p className="dynamic-text font-semibold text-lg pl-[6px] self-center">
							{item.comments.length}
						</p>
					</div>
					<img
						src={`./icons/${isDarkMode ? "d-" : "l-"}share.svg`}
						alt="share"
						className="cursor-pointer"
					/>
				</div>
			</div>
		</>
	);
}

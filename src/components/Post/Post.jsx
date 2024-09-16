import { useState } from "react";
import CommentsSection from "./CommentSection";

import axios from "axios";
import updatePath from "../../functions/updatePath";
import formatDate from "../../functions/formatDate";

export default function Post({ isDarkMode, post }) {
	const [hasLiked, setHasLiked] = useState(
		post.likedBy.includes(localStorage.getItem("user"))
	);
	const [likes, setLikes] = useState(post.likes);
	const [sectionActive, setSectionActive] = useState(false);
	const [optimisticLikes, setOptimisticLikes] = useState(likes);
	const [optimisticComments, setOptimisticComments] = useState(
		post.comments.length
	);

	const handleLikePost = async () => {
		setHasLiked((prev) => true);
		setOptimisticLikes((prevLikes) => prevLikes + 1);
		try {
			const response = await axios.post(
				`http://localhost:3001/api/posts/${post._id}/like`,
				{ userId: localStorage.getItem("user") }
			);

			setLikes(response.data.likes);
			setOptimisticLikes(response.data.likes);
		} catch (err) {
			setHasLiked((prev) => false);
			setOptimisticLikes((prevLikes) => prevLikes - 1);
			console.error("Error liking the post:", err.message);
		}
	};

	const handleUnlikePost = async () => {
		setHasLiked((prev) => false);
		setOptimisticLikes((prevLikes) => prevLikes - 1);
		try {
			const response = await axios.post(
				`http://localhost:3001/api/posts/${post._id}/unlike`,
				{
					userId: localStorage.getItem("user"),
				}
			);

			setLikes(response.data.likes);
			setOptimisticLikes(response.data.likes);
		} catch (error) {
			setHasLiked((prev) => true);
			setOptimisticLikes((prevLikes) => prevLikes + 1);
			console.error("Error unliking the post:", error);
		}
	};

	return (
		<>
			{sectionActive ? (
				<CommentsSection
					isDarkMode={isDarkMode}
					setSectionActive={setSectionActive}
					setOptimisticComments={setOptimisticComments}
					post={post}
				/>
			) : (
				""
			)}

			<div className="w-full h-auto flex flex-col dynamic-primary rounded-xl mb-2">
				<div className="flex flex-col p-4 pb-2">
					<div className="w-full h-14 flex items-center" id="headerPost">
						<div
							className="w-12 h-12 rounded-full dynamic-bg cursor-pointer object-cover"
							id="image"
						>
							<img
								src={
									post.picturePath
										? `http://localhost:3001/${updatePath(post.picturePath)}`
										: "/images/default-profile-picture.png"
								}
								alt="profile pict"
								className="rounded-full h-full w-full"
							/>
						</div>
						<div
							className="flex flex-col px-2 dynamic-text"
							id="nameAndLocation"
						>
							<p className="font-bold text-xl cursor-pointer dynamic-text text-ellipsis whitespace-nowrap overflow-hidden">
								{post.displayName}
							</p>
							<p className="font-semibold opacity-80 dynamic-text">
								{post.location}
							</p>
						</div>
					</div>
					<div className="w-full h-auto pt-2">
						<p className="dynamic-text text-lg text-left">{post.description}</p>
						<div className="text-l-accent dark:text-d-accent text-lg font-semibold py-1 flex flex-row gap-1">
							{post.hashtags.map((hashtag, index) => {
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
					{post.imagePath !== "" && (
						<img
							src={`http://localhost:3001/${updatePath(post.imagePath)}`}
							alt="image post"
						/>
					)}
				</div>
				<div
					className="w-full h-[40px] md:h-[42px] flex flex-row px-3 gap-3 pb-2  md:pb-2"
					id="likes"
				>
					<div className="flex flex-row justify-center leading-3">
						<img
							src={`./icons/${
								hasLiked ? "active-" : isDarkMode ? "d-" : "l-"
							}like.svg`}
							alt="like"
							className="cursor-pointer w-8"
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
							className="cursor-pointer w-8"
							onClick={() => setSectionActive(!sectionActive)}
						/>
						<p className="dynamic-text font-semibold text-lg pl-[6px] self-center">
							{optimisticComments}
						</p>
					</div>
					<img
						src={`./icons/${isDarkMode ? "d-" : "l-"}share.svg`}
						alt="share"
						className="cursor-pointer w-8"
					/>
				</div>
				<div className="flex dynamic-text text-sm opacity-80 px-4  pb-2 md:pb-2">
					{formatDate(post.createdAt)}
				</div>
			</div>
		</>
	);
}

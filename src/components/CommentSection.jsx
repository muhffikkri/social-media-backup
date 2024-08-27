import { useEffect, useRef, useState } from "react";
import Comment from "./Comment";
import handleShowToast from "../functions/showToast";
import axios from "axios";
import updatePath from "../functions/updatePath";
export default function CommentsSection({
	isDarkMode,
	setSectionActive,
	setOptimisticComments,
	post,
}) {
	useEffect(() => {
		fetchComments();
	}, []);
	const comment = useRef(null);
	const [getComments, setComments] = useState([]);

	const fetchComments = async () => {
		try {
			await axios
				.post(`http://localhost:3001/api/posts/${post._id}/get/comments`)
				.then((res) => {
					setComments(res.data.data);
				})
				.catch((err) => {
					console.error(err.message);
					handleShowToast("error", err.msg);
				});
		} catch (err) {
			console.error(err.msg);
			handleShowToast("error", err.msg);
		}
	};

	async function handleAddComment() {
		try {
			if (comment.current.value.length === 0) {
				handleShowToast("error", "You must type something to comment!");
				return;
			}

			await axios
				.post(`http://localhost:3001/api/posts/${post._id}/add/comment`, {
					userId: localStorage.getItem("user"),
					comment: comment.current.value,
				})
				.then((res) => {
					setOptimisticComments((prev) => prev + 1);
					comment.current.value = "";
					fetchComments();
				})
				.catch((err) => handleShowToast("error", err.msg));
		} catch (err) {
			console.log(err);
			handleShowToast("error", err.msg);
		}
	}
	return (
		<>
			<section
				className="w-screen h-[calc(100vh-61px)] md:h-[calc(100vh-73px)] top-[61px] md:top-[73px] left-0 font-bold fixed flex flex-col justify-end md:justify-center z-[999] bg-[rgba(214,215,216,0.7)] dark:bg-[rgba(214,215,216,0.2)] cursor-pointer"
				onClick={() => {
					setSectionActive(false);
				}}
			>
				<div
					className="dynamic-primary w-full md:w-4/5 max-w-screen-md h-[80%] self-center relative rounded-lg shadow-lg flex flex-col cursor-auto"
					onClick={(event) => {
						event.stopPropagation();
					}}
				>
					<div className="p-4 flex justify-between items-center border-b border-[rgba(10,10,18,0.2)] dark:border-[rgba(214,215,216,0.2)]">
						<div className="flex items-center">
							<img
								className="w-10 h-10 rounded-full"
								src={
									post.picturePath
										? `http://localhost:3001/${updatePath(post.picturePath)}`
										: "/images/default-profile-picture.png"
								}
								alt="User avatar"
							/>
							<span className="ml-2 font-bold dynamic-text">
								{post.displayName}
							</span>
						</div>
						<img
							src={`./icons/${isDarkMode ? "d-" : "l-"}close.svg`}
							alt="close"
							className="cursor-pointer"
							onClick={() => {
								setSectionActive(false);
							}}
						/>
					</div>
					<div className="p-4 flex-1 overflow-y-auto">
						{getComments.map((comment, i) => {
							return <Comment comment={comment} key={i} />;
						})}
					</div>
					<form
						className="p-3 border-t border-[rgba(10,10,18,0.2)] dark:border-[rgba(214,215,216,0.2)] flex justify-between "
						onSubmit={async (e) => {
							e.preventDefault();
							await handleAddComment();
						}}
					>
						<input
							type="text"
							placeholder="Add a comment..."
							ref={comment}
							className="w-[80%] p-3 border-l-bgc dark:border-d-bgc dynamic-text font-medium rounded-md outline-none focus:ring-2 focus:ring-d-accent text-sm md:text-base dynamic-secondary transition-all"
						/>
						<button className="text-base lg:text-lg bg-d-accent opacity-90 dynamic-text transition-all rounded-md w-[15%] hover:opacity-100 ">
							Post
						</button>
					</form>
				</div>
			</section>
		</>
	);
}

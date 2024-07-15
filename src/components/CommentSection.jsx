import Comment from "./Comment";
export default function CommentsSection({ setCommentActive }) {
	return (
		<>
			<section
				className="w-screen h-[calc(100vh-61px)] md:h-[calc(100vh-73px)] top-[61px] md:top-[73px] left-0 font-bold fixed flex flex-col justify-end md:justify-center z-[999] bg-[rgba(214,215,216,0.2)] cursor-pointer"
				onClick={() => {
					setCommentActive(false);
				}}
			>
				<div
					className="bg-d-primary w-full md:w-4/5 max-w-screen-md h-[80%] self-center relative rounded-lg shadow-lg flex flex-col cursor-auto"
					onClick={(event) => {
						event.stopPropagation();
					}}
				>
					<div className="p-4 flex justify-between items-center border-b border-d-text">
						<div className="flex items-center">
							<img
								className="w-10 h-10 rounded-full"
								src="https://via.placeholder.com/150"
								alt="User avatar"
							/>
							<span className="ml-2 font-bold text-d-text">User Name</span>
						</div>
						<img
							src="./icons/d-close.svg"
							alt="close"
							className="cursor-pointer"
							onClick={() => {
								setCommentActive(false);
							}}
						/>
					</div>
					<div className="p-4 flex-1 overflow-y-auto">
						<Comment />
						<Comment />
					</div>
					<div className="p-3 border-t border-d-text flex justify-between ">
						<input
							type="text"
							placeholder="Add a comment..."
							className="w-[80%] p-3 border-d-bgc text-d-text font-medium rounded-md outline-none focus:ring-2 focus:ring-d-accent text-sm md:text-base bg-d-secondary transition-all delay-150"
						/>
						<button className="text-base lg:text-lg bg-d-accent opacity-90 text-d-text transition-all rounded-md w-[15%] hover:opacity-100">
							Post
						</button>
					</div>
				</div>
			</section>
		</>
	);
}

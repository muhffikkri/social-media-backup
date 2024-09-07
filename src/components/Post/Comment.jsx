import updatePath from "../../functions/updatePath";

export default function Comment({ comment }) {
	return (
		<>
			<div className="flex items-start space-x-2 mb-4">
				<img
					className="w-8 h-8 rounded-full"
					src={
						comment.picturePath
							? `http://localhost:3001/${updatePath(comment.picturePath)}`
							: "/images/default-profile-picture.png"
					}
					alt="User avatar"
				/>
				<div className="flex flex-col">
					<span className="font-semibold text-d-text text-sm lg:text-base dynamic-text">
						{comment.displayName}
					</span>
					<span className="text-d-text text-sm lg:text-base font-normal dynamic-text">
						{comment.comment}
					</span>
				</div>
			</div>
		</>
	);
}

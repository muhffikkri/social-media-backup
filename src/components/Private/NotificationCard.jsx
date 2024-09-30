export default function NotificationCard() {
	return (
		<>
			<div className="w-full xl:p-2 p-1 flex flex-row items-center justify-between flex-wrap">
				<div className="center flex-row xl:gap-2 gap-1 ">
					<img
						src="./images/default-profile-picture.png"
						alt="profile pict"
						className="xl:w-8 xl:h-8 w-6 h-6 rounded-full"
					/>
					<p className="font-semibold md:text-base text-sm dynamic-text">
						Dummy Friend
					</p>
					<span className="dynamic-text md:text-base text-sm">
						commented on your post
					</span>
				</div>
				<span className="dynamic-text opacity-80 md:text-base text-sm xl:p-1 p-[2px]">
					18 minutes ago
				</span>
			</div>
		</>
	);
}

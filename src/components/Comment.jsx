export default function Comment() {
	return (
		<>
			<div className="flex items-start space-x-2 mb-4">
				<img
					className="w-8 h-8 rounded-full"
					src="https://via.placeholder.com/150"
					alt="User avatar"
				/>
				<div className="flex flex-col">
					<span className="font-semibold text-d-text text-sm lg:text-base">
						User Name
					</span>
					<span className="text-d-text text-sm lg:text-base font-normal">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
						libero earum cum cupiditate! Temporibus ex voluptatibus distinctio
						saepe, autem atque numquam. Quos eveniet consectetur unde mollitia
						eos ducimus aspernatur facilis.
					</span>
				</div>
			</div>
		</>
	);
}

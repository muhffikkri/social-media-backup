import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PostForm({ handleShowToast }) {
	const [previewImage, setPreviewImage] = useState(null);
	const [image, setImage] = useState(null);
	const desciption = useRef(null);
	const hashtags = useRef(null);
	const navigate = useNavigate();

	const uploadImage = async (desc = "", hashtag = "") => {
		try {
			const formData = new FormData();
			if (image !== null) {
				formData.append("image", image);
			}
			formData.append("_id", localStorage.getItem("user"));
			formData.append("description", desc);
			formData.append("hashtags", hashtag);
			await axios
				.post("http://localhost:3001/api/posts/create", formData, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				})
				.then((res) => {
					console.log(res.data);
					handleShowToast(res.data.status, res.data.msg);
					navigate("/home");
				})
				.catch((err) => {
					handleShowToast("error", err.message);
					console.error(err);
				});
		} catch (err) {
			console.error(err);
			handleShowToast("error", "Something went wrong, please try again!");
		}
	};
	return (
		<>
			<div className="container h-16 lg:hidden"></div>

			<form
				className="w-[calc(100% - 288px)] sm:h-[calc(100vh-73px)] xl:ml-[288px] xl:mt-[73px] p-3"
				onSubmit={(e) => {
					e.preventDefault();
					if (!image && desciption.current.value.length <= 0) {
						handleShowToast(
							"error",
							"Please provide either an image or a description"
						);
					} else {
						uploadImage(desciption.current.value, hashtags.current.value);
					}
				}}
			>
				<div className="dynamic-primary rounded-md p-3 h-full flex flex-col gap-3 mb-16 sm:mb-28 lg:mb-24">
					<div className="dynamic-secondary border-dashed border-2 border-d-accent flex grow justify-center content-center">
						<div class="flex items-center justify-center w-full">
							<label
								for="dropzone-file"
								className="flex flex-col items-center justify-center w-full h-64 border-2 border-none cursor-pointer dynamic-secondary hover:bg-gray-300 dark:hover:bg-gray-700 relative"
							>
								<div
									className={`h-full w-full absolute ${
										previewImage ? "block" : "hidden"
									}`}
								>
									<img
										src={previewImage}
										alt="upload image"
										className="h-full w-full object-contain "
									/>
								</div>
								<div class="flex flex-col items-center justify-center pt-5 pb-6">
									<svg
										class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 16"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
										/>
									</svg>
									{previewImage ? (
										""
									) : (
										<>
											{" "}
											<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
												<span class="font-semibold text-gray-500 dark:text-gray-400">
													Click to upload
												</span>{" "}
												or drag and drop
											</p>
											<p class="text-xs text-gray-500 dark:text-gray-400">
												PNG, JPG or JPEG (MAX 2MB)
											</p>
										</>
									)}
								</div>
								<input
									id="dropzone-file"
									accept=".jpg, .jpeg, .png"
									type="file"
									class="hidden"
									onChange={(e) => {
										console.log(e.target.files[0].type);
										if (e.target.files[0].size > 2097152) {
											handleShowToast("error", "Maximum file is 2MB");
										} else if (
											!["image/jpg", "image/jpeg", "image/png"].includes(
												e.target.files[0].type
											)
										) {
											handleShowToast(
												"error",
												"File format must be .jpg, .jpeg or .png"
											);
										} else {
											setPreviewImage(URL.createObjectURL(e.target.files[0]));
											setImage(e.target.files[0]);
										}
									}}
								/>
							</label>
						</div>
					</div>

					<div className="flex flex-col grow">
						<textarea
							name="description"
							id="description"
							cols="10"
							ref={desciption}
							rows="5"
							className="rounded-md min-h-1 dynamic-secondary dynamic-text p-2 text-lg mb-2 focus:ring-2 focus:ring-d-accent outline-none"
							placeholder="What's on your mind?"
						></textarea>
						<input
							type="text"
							name="hashtags"
							ref={hashtags}
							className="rounded-md dynamic-secondary h-10 p-2 dynamic-text text-lg focus:ring-2 focus:ring-d-accent outline-none"
							placeholder="#hashtags (separate with space)"
							autoComplete="off"
						/>
						<button
							type="submit"
							className="w-24 h-10 opacity-90 hover:opacity-100 bg-l-accent dark:bg-d-accent rounded-md mt-3 place-self-end"
						>
							Post
						</button>
					</div>
				</div>
			</form>
		</>
	);
}

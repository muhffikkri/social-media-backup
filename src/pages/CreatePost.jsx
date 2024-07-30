import PostForm from "../components/PostForm";

export default function CreatePost({ handleShowToast }) {
	return (
		<>
			<PostForm handleShowToast={handleShowToast} />
		</>
	);
}

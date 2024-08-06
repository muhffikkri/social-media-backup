import PostForm from "../components/PostForm";
import { useOutletContext } from "react-router-dom";
export default function CreatePost({ handleShowToast }) {
	const { setActivePage } = useOutletContext();
	setActivePage("post-page");
	return (
		<>
			<PostForm handleShowToast={handleShowToast} />
		</>
	);
}

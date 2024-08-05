import { useOutletContext } from "react-router-dom";
export default function Profile() {
	const { setActivePage } = useOutletContext();
	setActivePage("profile-page");
	return <></>;
}

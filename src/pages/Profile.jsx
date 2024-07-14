import Navbar from "../components/Navbar";

export default function Profile() {
	const activePage = "profile";

	return (
		<>
			<Navbar activePage={activePage} />
		</>
	);
}

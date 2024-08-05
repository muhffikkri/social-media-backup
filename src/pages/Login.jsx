import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import NavbarPlain from "../components/navbarPlain";
import HeroImage from "../components/HeroImage";
import axios from "axios";
export default function Login({ handleShowToast }) {
	const navigate = useNavigate();
	const handleLogIn = async (email, password) => {
		try {
			await axios
				.post("http://localhost:3001/api/auth/login", { email, password })
				.then((res) => {
					handleShowToast(res.data.status, res.data.msg);
					if (res.data.status === "success") {
						if (res.data.displayName.length > 3) {
							localStorage.setItem("user", res.data._id);
							localStorage.setItem("picturePath", res.data.picturePath);
							localStorage.setItem("token", res.data.accessToken);
							navigate("/home");
						} else {
							navigate("/create", {
								state: { token: res.data.accessToken, _id: res.data._id },
							});
						}
					}
				})
				.catch((res) => {
					console.error(res.response.data);
					handleShowToast(res.response.data.status, res.response.data.msg);
				});
		} catch (err) {
			console.error(err);
			handleShowToast("error", "Something went wrong!");
		}
	};

	return (
		<div className="bg-d-bgc w-screen h-screen px-6 py-2 xl:py-4 xl:px-12">
			<NavbarPlain />
			<div className="container flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:h-[500px] lg:py-4">
				<div className="text-d-text font-open-sans lg:w-1/2 z-10">
					<h2 className="text-3xl font-extrabold mb-1 mt-5 md:text-5xl md:mt-9 md:mb-2 lg:text-6xl">
						Welcome Back!
					</h2>
					<p className="opacity-70 text-sm md:text-base">
						Don&lsquo;t have an account?
						<Link to="/Signup">
							<span className="pl-1 text-d-accent underline cursor-pointer font-semibold">
								Sign up
							</span>
						</Link>
					</p>
					<Form type="Log in" handleSubmit={handleLogIn} />
				</div>
				<HeroImage />
			</div>
		</div>
	);
}

import { Link, useNavigate } from "react-router-dom";
import NavbarPlain from "../components/navbarPlain";
import Form from "../components/Form";
import HeroImage from "../components/HeroImage";
import axios from "axios";
export default function SignUp({ handleShowToast }) {
	const navigate = useNavigate();
	const handleSignUp = async (email, password) => {
		try {
			await axios
				.post("http://localhost:3001/api/auth/signup", { email, password })
				.then((res) => {
					handleShowToast(res.data.status, res.data.msg);
					if (res.data.status === "success")
						navigate("/login", { replace: true });
				})
				.catch((err) => {
					console.error(err);
					handleShowToast("error", err.response.data.msg);
				});
		} catch (err) {
			console.error(err);
			handleShowToast("error", err.msg);
		}
	};
	return (
		<div className="bg-d-bgc w-screen h-screen px-6 py-2 xl:py-4 xl:px-12">
			<NavbarPlain />
			<div className="container flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:h-[500px]">
				<div className="text-d-text font-open-sans lg:w-1/2">
					<p className="font-semibold opacity-70 text-sm md:text-lg">
						START FOR FREE
					</p>
					<h2 className="text-3xl font-extrabold mb-1  md:text-5xl md:my-2 lg:text-6xl">
						Create new account
					</h2>
					<p className="opacity-70 text-sm md:text-base">
						Already have an account?
						<Link to="/login">
							<span className="pl-1 text-d-accent underline cursor-pointer font-semibold">
								Login
							</span>
						</Link>
					</p>
					<Form type="Sign Up" handleSubmit={handleSignUp} />
				</div>
				<HeroImage />
			</div>
		</div>
	);
}

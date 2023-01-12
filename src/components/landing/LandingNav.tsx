import { BsChevronDown } from "react-icons/bs";
import { toggleLoginModal } from "../../redux/slices/authSlice";
import useToolkit from "../../utils/hooks/useToolkit";

type NavItemProps = {
	title: string;
	className?: string;
	onClick?: () => void;
};

const LandingNav = () => {
	const { dispatch } = useToolkit();

	const navLinks: NavItemProps[] = [
		{ title: "Destinations" },
		{ title: "Hotels" },
		{ title: "Flights" },
		{ title: "Bookings" },
		{ title: "Login", onClick: () => dispatch(toggleLoginModal()) },
		{
			title: "Sign up",
			className: "border border-black rounded-md px-5 py-1.5",
			onClick: () => console.log("Login"),
		},
	];

	return (
		<nav className="bg-transparent fitted z-20 absolute h-12 flex-btw centered">
			<div className="curp pl-5 lg:pl-0">
				<img src="/assets/images/landing/logo.png" alt="logo" width={80} />
			</div>
			<ul className="bg-transparent hidden lg:flex items-center space-x-10">
				{navLinks.map(({ title, className, onClick }: NavItemProps) => (
					<li
						key={title}
						className={`${className} curp font-pop text-sm med`}
						onClick={onClick}>
						{title}
					</li>
				))}
				<li className="font-pop text-sm flect med">
					EN <BsChevronDown className="ml-1.5" />
				</li>
			</ul>
		</nav>
	);
};

export default LandingNav;

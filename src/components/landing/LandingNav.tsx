import { BsChevronDown } from "react-icons/bs";
import useToolkit from "../../utils/hooks/useToolkit";
import { NavItemProps } from "../../../types";

const LandingNav = () => {
	const { navLinks } = useToolkit();

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

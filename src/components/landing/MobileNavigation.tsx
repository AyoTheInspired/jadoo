import { IoMdClose } from "react-icons/io";
import { useToolkit } from "../../components";
import { toggleMobileMenu } from "../../redux/slices/authSlice";
import CenterModal from "../misc/CenterModal";
import { NavItemProps } from "../../../types";

const MobileNavigation = () => {
	const { useAppSelector, dispatch, navLinks } = useToolkit();
	const { isMobileMenuOpen } = useAppSelector((state) => state.auth);

	return (
		<CenterModal
			isMobileMenu
			control={isMobileMenuOpen}
			onClose={() => dispatch(toggleMobileMenu())}>
			<div className="w-full">
				<div className="flex-btw p-3">
					<div className="curp">
						<img src="/assets/images/landing/logo.png" alt="logo" width={80} />
					</div>

					<IoMdClose
						onClick={() => dispatch(toggleMobileMenu())}
						className="text-3xl"
					/>
				</div>

				<ul className="flex flex-col items-end pt-8">
					{navLinks.map(({ title, onClick }: NavItemProps) => (
						<li
							onClick={() => {
								if (onClick) {
									dispatch(toggleMobileMenu());
									onClick();
								} else {
									dispatch(toggleMobileMenu());
								}
							}}
							className="font-pop lt-txt mb-5"
							key={title}>
							{title}
						</li>
					))}
				</ul>
			</div>
		</CenterModal>
	);
};

export default MobileNavigation;

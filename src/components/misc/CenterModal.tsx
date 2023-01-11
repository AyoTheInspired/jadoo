import React from "react";
import { useToolkit } from "../../components";

type CenterModalProps = {
	children: React.ReactNode;
	title?: string | JSX.Element;
	onClose?: () => void;
	control: boolean;
	isMobileMenu?: boolean;
	darkBg?: boolean;
};

const CenterModal = ({
	children,
	title,
	onClose,
	control,
	isMobileMenu,
	darkBg,
}: CenterModalProps) => {
	return control ? (
		<section
			onClick={onClose}
			style={{ zIndex: "900" }}
			className={`fixed top-0 left-0 right-0 bottom-0 backdrop-blur-[2px] flexed min-w-full z-50 ${
				darkBg ? "bg-[#00000066]" : "bg-[#B7B7B769] "
			} ${
				isMobileMenu ? "p-0 overflow-y-hidden" : "p-4 lg:p-0 overflow-y-scroll"
			}`}>
			{isMobileMenu ? (
				<div
					onClick={(e) => e.stopPropagation()}
					className="bg-white h-full w-full rounded-sm shadow-md z-50 ">
					<div className="px-6 py-3">{children}</div>
				</div>
			) : (
				<div
					onClick={(e) => e.stopPropagation()}
					className="bg-white min-h-[220px] w-full md:w-[55%] lg:w-[30%] rounded-md shadow-md z-50">
					<div className="p-6">
						<div className="flex-btw mb-5">
							{title && (
								<p className="font-semibold mb-0 tracking-wider font-pop">
									{title}
								</p>
							)}
						</div>
						{children}
					</div>
				</div>
			)}
		</section>
	) : null;
};

export default CenterModal;

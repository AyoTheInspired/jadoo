type FooterLinkProps = {
	title: string;
	children: Array<string>;
};

const footerLinks: FooterLinkProps[] = [
	{
		title: "Company",
		children: ["About", "Careers", "Mobile"],
	},
	{
		title: "Contact",
		children: ["Help/FAQ", "Press", "Affiliates"],
	},
	{
		title: "More",
		children: ["Airline fees", "Airline", "Low fare tips"],
	},
];

const socialImages = [
	"/assets/images/landing/fbk.png",
	"/assets/images/landing/insta.png",
	"/assets/images/landing/twt.png",
];

const Footer = () => {
	return (
		<footer className="centered py-10 md:py-16 lg:py-20">
			<div className="flex items-start md:justify-between flex-wrap lg:flex-nowrap px-10 lg:px-0 space-y-10 lg:space-y-0">
				<div className="w-full md:w-[20%]">
					<p className="font-pop mb-4 med text-lg lg:text-4xl">Jadoo.</p>
					<div className="med lt-txt text-sm">
						Book your trip in minutes, get full control for much longer.
					</div>
				</div>
				<div className="w-full md:w-[30%] flex-1 md:px-8 lg:px-14">
					<div className="flect justify-between">
						{footerLinks.map(({ title, children }: FooterLinkProps) => (
							<div className="" key={title}>
								<p className="mb-4 font-pop font-bold lg:text-lg">{title}</p>
								<ul className="flex flex-col">
									{children.map((item: string) => (
										<li className="font-pop lt-txt mb-2 curp hover:underline text-sm lg:text-[17px]">
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="w-full md:w-[20%]">
					<div className="flex mb-3 space-x-3">
						{socialImages.map((item: string, idx) => (
							<div key={idx}>
								<img src={item} alt="social-icon" />
							</div>
						))}
					</div>

					<div className="flex flex-col">
						<p className="lt-txt lg:text-lg font-pop">Discover our app</p>
						<div className="flex space-x-3 mt-4">
							<img
								src="/assets/images/landing/playstore-btn.png"
								alt="store-btn"
								width={100}
								className="curp"
							/>
							<img
								src="/assets/images/landing/appstore-btn.png"
								alt="store-btn"
								width={100}
								className="curp"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full my-8 px-10 lg:px-0 ">
				<p className="mb-0 font-pop lt-txt md:tcent">
					All rights reserved@jadoo.co
				</p>
			</div>
		</footer>
	);
};

export default Footer;

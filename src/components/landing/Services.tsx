type ServiceProps = {
	imgPath: string;
	title: string;
	subtitle: string;
	isCustom?: boolean;
};

const Services = () => {
	const services: ServiceProps[] = [
		{
			imgPath: "/assets/images/landing/calc-weather.png",
			title: "Calculated Weather",
			subtitle: "Built Wicket longer admire do barton vanity itself do in it.",
		},
		{
			imgPath: "/assets/images/landing/best-flights.png",
			title: "Best Flights",
			subtitle: "Engrossed listening. Park gate sell they west hard for the.",
			isCustom: true,
		},
		{
			imgPath: "/assets/images/landing/local-events.png",
			title: "Local Events",
			subtitle:
				"Barton vanity itself do in it. Preferd to men it engrossed listening.",
		},
		{
			imgPath: "/assets/images/landing/customz.png",
			title: "Customizations",
			subtitle:
				"We deliver outsourced aviation services for military customers.",
		},
	];

	return (
		<section className="w-full pb-3 lg:pb-14 font-pop">
			<div className="w-full flex items-center justify-end">
				<div className="w-full flexed flex-col mb-5">
					<p className="smb lt-txt mb-4">CATEGORY</p>
					<h3 className="smb twide text-2xl lg:text-4xl">
						We Offer Best Services
					</h3>
				</div>
				<img
					src="/assets/images/landing/subscribe-decor.png"
					alt="decor"
					className="hidden lg:flex"
					width={150}
				/>
			</div>
			<div className="centered mx-auto flex items-center lg:justify-between pb-12 pt-5 lg:pt-0 flex-wrap">
				{services.map(
					({ imgPath, title, subtitle, isCustom }: ServiceProps) => (
						<div
							className={`flexed flex-col w-full md:w-2/4 lg:w-1/4 mb-5 lg:mb-0 ${
								isCustom &&
								"service-wrapper lg:relative z-50 lg:rounded-bl-[30px] lg:rounded-br-[30px] lg:pb-[35px] lg:z-[500]"
							}`}
							key={title}>
							{isCustom && (
								<>
									<img
										width={70}
										className="hidden lg:block lg:absolute lg:-bottom-10 lg:-left-7"
										src="/assets/images/landing/best-flights-rect.png"
										alt="square"
									/>
									<div className="h-10 rounded-bl-[30px] bwite w-14 hidden lg:block lg:absolute bottom-0 left-0" />
								</>
							)}
							<img
								src={imgPath}
								alt={title}
								width={isCustom ? 70 : 50}
								className={isCustom ? "mb-1.5" : "mb-5"}
							/>
							<h6 className="med mb-2">{title}</h6>
							<p className="mb-0 med lt-txt tcent text-sm w-3/5">{subtitle}</p>
						</div>
					)
				)}
			</div>
		</section>
	);
};

export default Services;

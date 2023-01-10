import { CSSProperties } from "react";

type ServiceProps = {
	imgPath: string;
	title: string;
	subtitle: string;
	style?: CSSProperties;
};

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
		style: {
			boxShadow:
				"0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)",
			borderBottomLeftRadius: "30px",
			borderBottomRightRadius: "30px",
			paddingBottom: "35px",
			zIndex: 500,
		},
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
		subtitle: "We deliver outsourced aviation services for military customers.",
	},
];

const Services = () => {
	return (
		<section className="w-full pb-8 lg:pb-14 font-pop">
			<div className="w-full flex items-center justify-end">
				<div className="w-full flexed flex-col mb-5">
					<p className="smb text-[#5E6282] mb-4">CATEGORY</p>
					<h3 className="smb twide lg:text-4xl">We Offer Best Services</h3>
				</div>
				<img
					src="/assets/images/landing/subscribe-decor.png"
					alt="decor"
					width={150}
				/>
			</div>
			<div className="centered mx-auto flex items-center lg:justify-between pb-12">
				{services.map(({ imgPath, title, subtitle, style }: ServiceProps) => (
					<div
						style={style}
						className={`flexed flex-col lg:w-1/4 ${style && "relative z-50"}`}
						key={title}>
						{style && (
							<>
								<img
									width={70}
									className="absolute -bottom-10 -left-7"
									src="/assets/images/landing/best-flights-rect.png"
									alt="square"
								/>
								<div className="h-10 rounded-bl-[30px] bwite w-14 absolute bottom-0 left-0" />
							</>
						)}
						<img
							src={imgPath}
							alt={title}
							width={style ? 70 : 50}
							className={style ? "mb-1.5" : "mb-5"}
						/>
						<h6 className="med mb-2">{title}</h6>
						<p className="mb-0 med text-[#5E6282] tcent text-sm w-3/5">
							{subtitle}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;

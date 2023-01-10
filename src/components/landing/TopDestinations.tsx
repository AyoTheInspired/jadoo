type DestinationProps = {
	imgPath: string;
	location: string;
	price: number;
	days: number;
};

const destinations: DestinationProps[] = [
	{
		imgPath: "/assets/images/landing/dest1.png",
		location: "Rome, Italy",
		price: 5.42,
		days: 10,
	},
	{
		imgPath: "/assets/images/landing/dest1.png",
		location: "London, UK",
		price: 4.2,
		days: 12,
	},
	{
		imgPath: "/assets/images/landing/dest3.png",
		location: "Full Europe",
		price: 15,
		days: 28,
	},
];

const TopDestinations = () => {
	return (
		<section className="w-full py-20 bwite">
			<div className="w-full flex items-center justify-end">
				<div className="w-full flexed flex-col mb-5">
					<p className="smb lt-txt mb-4 font-pop">Top Selling</p>
					<h3 className="smb twide lg:text-4xl">Top Destinations</h3>
				</div>
			</div>
			<div className="centered mx-auto flect lg:justify-between pt-8">
				{destinations.map(
					({ imgPath, location, price, days }: DestinationProps) => (
						<div
							className="flex flex-col bg-red-400 shadow-lg lg:w-2/6 rounded-xl relative"
							key={location}>
							<div className="">
								<img src={imgPath} alt={location} className="" />
							</div>
							<div className="bwite p-3 min-w-full rounded-br-xl rounded-bl-xl bred mt-auto font-mono">
								<div className="flex-btw font-pop">
									<h5 className="med">{location}</h5>
									<h5 className="med">${price}k</h5>
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</section>
	);
};

export default TopDestinations;

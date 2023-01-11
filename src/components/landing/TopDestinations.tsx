import { IoIosSend } from "react-icons/io";

type DestinationProps = {
	imgPath: string;
	location: string;
	price: number;
	days: number;
};

const destinations: DestinationProps[] = [
	{
		imgPath: "/assets/images/landing/rome.jpeg",
		location: "Rome, Italy",
		price: 5.42,
		days: 10,
	},
	{
		imgPath: "/assets/images/landing/london.jpeg",
		location: "London, UK",
		price: 4.2,
		days: 12,
	},
	{
		imgPath: "/assets/images/landing/europe.jpeg",
		location: "Full Europe",
		price: 15,
		days: 28,
	},
];

const TopDestinations = () => {
	return (
		<section className="w-full py-10 lg:py-20 bwite">
			<div className="w-full flex items-center justify-end">
				<div className="w-full flexed flex-col mb-5">
					<p className="smb lt-txt mb-4 font-pop">Top Selling</p>
					<h3 className="smb twide text-2xl lg:text-4xl">Top Destinations</h3>
				</div>
			</div>
			<div className="centered mx-auto flect flex-wrap lg:flex-nowrap px-10 lg:px-0 md:justify-between pt-8">
				{destinations.map(
					({ imgPath, location, price, days }: DestinationProps) => (
						<div
							className="flex flex-col w-full md:w-[40%] md:mx-auto lg:w-[30%] lift destination-wrapper mb-10 lg:mb-0"
							key={location}>
							<div className="h-[350px] ">
								<img
									src={imgPath}
									alt={location}
									className="object-cover max-h-full w-full rounded-tr-3xl rounded-tl-3xl"
								/>
							</div>
							<div className="bwite px-4 py-5  rounded-br-xl rounded-bl-xl font-mono">
								<div className="flex-btw text-[#5e6282]">
									<h5 className="med font-pop tracking-wide">{location}</h5>
									<h5 className="med font-pop">${price}k</h5>
								</div>
								<div className="flect mt-2.5 mb-3">
									<IoIosSend className="text-[#080809] text-xl mr-2" />

									<p className="mb-0 lt-txt">{days} Days Trip</p>
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

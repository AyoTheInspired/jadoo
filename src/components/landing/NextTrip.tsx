import { FiHeart } from "react-icons/fi";

type StepProps = {
	imgPath: string;
	title: string;
};

const tripSteps: StepProps[] = [
	{
		imgPath: "/assets/images/landing/destination.png",
		title: "Choose Destination",
	},
	{
		imgPath: "/assets/images/landing/make-payment.png",
		title: "Make Payment",
	},
	{
		imgPath: "/assets/images/landing/airport.png",
		title: "Reach Airport on Selected Date",
	},
];

const actionItems = [
	"/assets/images/landing/leaf.png",
	"/assets/images/landing/location.png",
	"/assets/images/landing/send.png",
];

const OngoingTrip = () => (
	<div
		style={{
			boxShadow:
				"0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)",
		}}
		className="absolute z-[60] right-8 bottom-16 flex items-start bwite py-3 px-6 rounded-xl">
		<div className="flexed mr-3">
			<img
				src="/assets/images/landing/rome-trip-img.png"
				alt="rome"
				className="h-10 w-10 rounded-full"
			/>
		</div>
		<div className="">
			<p className="mb-1 text-xs text-[#84829A]">Ongoing</p>
			<p className="mb-1 text-sm font-pop med">Trip to Rome</p>
			<p className="mb-1 mt-2 text-xs font-pop med">
				<span className="text-[#8A79DF]">40%</span> completed
			</p>

			<div className="w-full h-2 mt-2 bg-[#F5F5F5] rounded-xl">
				<div className="h-full w-2/5 bg-[#8A79DF] rounded-xl" />
			</div>
		</div>
	</div>
);

const NextTrip = () => {
	return (
		<div className="centered relative flect md:justify-between py-10 lg:py-16 bwite">
			<div className="w-full md:w-2/4">
				<h5 className="mb-5 med font-pop lt-txt text-lg tcent lg:text-left">
					Easy and Fast
				</h5>
				<p className="mb-14 text-[#14183E] tcent lg:text-left text-3xl lg:text-[58px] lg:leading-[65px] font-bold">
					Book Your Next Trip In 3 Easy Steps
				</p>
				<div className="flex flex-col">
					{tripSteps.map(({ title, imgPath }: StepProps) => (
						<div key={title} className="mb-10 px-7 lg:px-0">
							<div className="flect">
								<div className="mr-5">
									<img
										src={imgPath}
										alt={title}
										className="w-[140px] lg:w-[100px]"
									/>
								</div>
								<div>
									<h5 className="mb-1 lt-txt font-bold font-pop tracking-wide">
										{title}
									</h5>
									<p className="mb-0 font-pop lt-txt text-justify lg:text-left pr-7 lg:pr-0">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Esse, omnis! soluta odio odit numquam optio, culpa
										voluptatibus?
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="w-full md:w-2/4 hidden lg:flexed relative">
				<img
					src="assets/images/landing/bookmark-eclipse.png"
					alt="eclipse"
					width={500}
					className="absolute right-2 -top-[140px]"
				/>
				<OngoingTrip />
				<div
					style={{
						boxShadow:
							"0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)",
					}}
					className="w-[300px] bwite z-50 p-2 rounded-3xl flex flex-col px-5">
					<div className="w-full">
						<img src="assets/images/landing/booking-card-img.jpeg" alt="lady" />
					</div>
					<div className="py-5">
						<p className="mb-3 med font-pop text-[#080809]">Trip To Greece</p>
						<p className="mb-3 text-[#84829A]">14-29 June | by Robbin joseph</p>
						<div className="flex items-center space-x-4">
							{actionItems.map((item, idx) => (
								<div
									className="h-9 w-9 flexed rounded-full bg-gray-200 lift"
									key={idx}>
									<img src={item} alt="icon" />
								</div>
							))}
						</div>

						<div className="w-full flex-btw items-center mt-6">
							<div className="flect">
								<img src="assets/images/landing/abstract.png" alt="abstract" />
								<p className="mb-0 text-sm ml-2 text-[#84829A]">
									24 people going
								</p>
							</div>
							<FiHeart className="text-lg text-[#4152CA] lift" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NextTrip;

import React from "react";

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

const NextTrip = () => {
	return (
		<div className="centered flect md:justify-between py-10 lg:py-16 bwite">
			<div className="w-full bred md:w-2/4">
				<h5 className="mb-5 med font-pop lt-txt lg:text-lg">Easy and Fast</h5>
				<p className="mb-14 text-[#14183E] text-xl lg:text-[58px] lg:leading-[65px] font-bold">
					Book Your Next Trip In 3 Easy Steps
				</p>
				<div className="flex flex-col">
					{tripSteps.map(({ title, imgPath }: StepProps) => (
						<div key={title} className="mb-10">
							<div className="flect">
								<div className="mr-5">
									<img src={imgPath} alt={title} width={100} />
								</div>
								<div>
									<h5 className="mb-1 lt-txt font-bold font-pop tracking-wide">
										{title}
									</h5>
									<p className="mb-0 font-pop lt-txt">
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
			<div className="w-full bred md:w-2/4 flexed">
				<div className="hs-[350px] w-[300px] bwite p-2 rounded-xl flex flex-col relative bred">
					<div className="w-full">
						<img src="assets/images/landing/booking-card-img.jpeg" alt="lady" />
					</div>
					<div className="py-5">
						<p className="mb-3 med font-pop text-[#080809]">Trip To Greece</p>
						<p className="mb-3">asdasd</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NextTrip;

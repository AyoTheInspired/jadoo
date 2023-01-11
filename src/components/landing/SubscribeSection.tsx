import React from "react";

const partnerImages = [
	"/assets/images/landing/axon.png",
	"/assets/images/landing/jesta.png",
	"/assets/images/landing/expedia.png",
	"/assets/images/landing/qantas.png",
	"/assets/images/landing/alitalia.png",
];

const SubscribeSection = () => {
	return (
		<section className="centered">
			<div className="my-8 lg:my-14 flexed space-x-5 md:space-x-0 space-y-5 lg:space-y-0 lg:justify-between flex-wrap">
				{partnerImages.map((item: string, idx) => {
					const isThirdItem = idx === 2;
					return (
						<div className="lift md:w-2/5 lg:w-auto md:flexed lg:mx-0">
							<img
								width={150}
								className={` ${
									isThirdItem &&
									"partner-expedia h-20 object-cover md:px-4 md:rounded-lg"
								}`}
								src={item}
								alt="partner"
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default SubscribeSection;

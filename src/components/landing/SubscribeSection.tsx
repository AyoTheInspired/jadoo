const partnerImages = [
	"/assets/images/landing/axon.png",
	"/assets/images/landing/jesta.png",
	"/assets/images/landing/expedia.png",
	"/assets/images/landing/qantas.png",
	"/assets/images/landing/alitalia.png",
];

const SubscribeSection = () => {
	return (
		<section className="centered pb-10 lg:pb-14 relative">
			<img
				src="/assets/images/landing/subscribe-decor.png"
				alt="decor"
				width={150}
				className="hidden lg:block lg:absolute -right-24 bottom-0"
			/>

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

			<div className="w-full relative rounded-tl-[50px] rounded-tr-3xl rounded-bl-2xl rounded-br-2xl flexed flex-col bg-[#DFD7F9] bg-opacity-40 min-h-[300px]">
				<img
					src="/assets/images/landing/sub-spiral-left.png"
					alt="spiral"
					width={350}
					className="hidden lg:block lg:absolute bottom-1 -left-12"
				/>

				<img
					src="/assets/images/landing/send.png"
					alt="spiral"
					width={40}
					className="hidden lg:block lg:absolute -top-2 -right-4"
				/>

				<img
					src="/assets/images/landing/sub-spiral-right.png"
					alt="spiral"
					width={150}
					className="hidden lg:block lg:absolute top-0 right-0"
				/>

				<p className="mb-8 lt-txt lg:text-2xl smb lg:w-2/4 tcent font-pop px-7 lg:px-0">
					Subscribe to get information, latest news, and other interesting
					offers about Cobham
				</p>

				<div className="flexed flex-col md:flex-row relative">
					<img
						src="/assets/images/landing/msg-icon.png"
						alt="spiral"
						width={20}
						className="absolute top-5 left-4 md:left-5"
					/>
					<input
						placeholder="Your email"
						type="text"
						className="outline-none mr-7 mb-5 md:mb-0 w-[350px] p-4 pl-12 placeholder:lt-txt placeholder:text-sm font-serat text-[#39425D] bwite rounded-lg"
					/>

					<button
						style={{
							background: "linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)",
						}}
						className="outline-none font-pop med px-4 py-2 rounded-md text-white active:scale-90 transition-transform">
						Subscribe
					</button>
				</div>
			</div>
		</section>
	);
};

export default SubscribeSection;

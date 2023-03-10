import { BsPlayFill } from "react-icons/bs";
import useToolkit from "../../utils/hooks/useToolkit";

const HeroSection = () => {
	const { user } = useToolkit();

	return (
		<section className="bwite pt-8 pb-16 lg:pt-12 centered">
			<div className="hidden lg:block lg:absolute right-0 top-0 h-[500px] w-[500px] z-10">
				<img src="/assets/images/landing/hero-layer.png" alt="layer" />
			</div>
			<div className="absolute left-0 top-0 h-[400px] w-[150px]">
				<img
					src="/assets/images/landing/left-overlay.png"
					alt="layer"
					className="h-full"
				/>
			</div>
			<div className="w-full mx-auto flex-wrap lg:flex-nowrap md:flex-btw pt-20">
				<div className="px-8 lg:px-0">
					{user && <p className="my-3 text-sm lt-txt">Welcome, {user}.</p>}

					<h5 className="font-pop font-bold text-[#DF6951] mb-5 tcent lg:text-left">
						BEST DESTINATIONS AROUND THE WORLD
					</h5>
					<div>
						<h3
							className="font-bold relative text-3xl lg:text-[72px]
						lg:w-[80%] tcent lg:text-left leading-[40px] lg:leading-[72px] text-[#181E4B]">
							Travel, enjoy and live a new and full life
							<span className="hidden lg:block lg:absolute right-10 top-16">
								<img
									src="/assets/images/landing/underlay.png"
									alt="underlay"
									width={280}
								/>
							</span>
						</h3>
						<p className="my-5 font-pop lt-txt med leading-7 lg:w-3/5">
							Built Wicket longer admire do barton vanity itself do in it.
							Preferred to sportsmen it engrossed listening. Park gate sell they
							west hard for the.
						</p>
					</div>
				</div>
				<div className="z-50 relative mb-8 lg:mb-0">
					<img
						src="/assets/images/landing/plane.png"
						alt="plane"
						width={70}
						className="absolute left-20 top-1"
					/>
					<img
						src="/assets/images/landing/plane.png"
						alt="plane"
						width={70}
						className="hidden lg:block lg:absolute -right-6 top-12"
					/>
					<img
						src="/assets/images/landing/hero-image.png"
						alt="lady"
						width={1000}
					/>
				</div>
			</div>
			<div className="flect pl-8 lg:pl-0">
				<button
					style={{
						boxShadow: "0px 20px 35px rgba(241, 165, 1, 0.15)",
					}}
					className="outline-none font-pop med bg-[#F1A501] px-4 py-2 rounded-md text-white">
					Find out more
				</button>

				<div className="flect curp">
					<button
						style={{
							boxShadow: "0px 15px 30px rgba(223, 105, 81, 0.3)",
						}}
						className="outline-none ml-7 flexed font-pop med bg-[#DF6951] h-7 w-7 rounded-full text-white">
						<BsPlayFill />
					</button>{" "}
					<span className="text-[#686D77] font-pop med ml-2">Play Demo</span>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;

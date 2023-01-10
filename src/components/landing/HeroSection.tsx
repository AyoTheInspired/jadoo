import React from "react";
import LandingNav from "./LandingNav";

const HeroSection = () => {
	return (
		<section className="min-h-screen ws-full bg-white pt-8 lg:pt-12 bgrn centered">
			{/* <LandingNav /> */}
			<div className="absolute right-0 top-0 h-[500px] w-[500px] z-10">
				<img src="/assets/images/landing/hero-layer.png" alt="layer" />
			</div>
			<div className="absolute left-0 top-0 h-[400px] w-[150px]">
				<img
					src="/assets/images/landing/left-overlay.png"
					alt="layer"
					className="h-full"
				/>
			</div>
			HeroSection
		</section>
	);
};

export default HeroSection;

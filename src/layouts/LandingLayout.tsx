import { HeroSection, LandingNav, Services } from "../components";

const LandingLayout = () => {
	return (
		<main className="relatives pt-5 lg:pt-10 flex items-center flex-col">
			<LandingNav />
			<HeroSection />
			<Services />
		</main>
	);
};

export default LandingLayout;

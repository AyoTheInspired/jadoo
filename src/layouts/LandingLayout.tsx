import {
	HeroSection,
	LandingNav,
	NextTrip,
	Services,
	TopDestinations,
} from "../components";

const LandingLayout = () => {
	return (
		<main className="pt-5 lg:pt-10 flex items-center flex-col">
			<LandingNav />
			<HeroSection />
			<Services />
			<TopDestinations />
			<NextTrip />
		</main>
	);
};

export default LandingLayout;

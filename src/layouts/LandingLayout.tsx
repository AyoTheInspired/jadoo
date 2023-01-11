import {
	HeroSection,
	LandingNav,
	NextTrip,
	Services,
	Testimonials,
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
			<Testimonials />
		</main>
	);
};

export default LandingLayout;

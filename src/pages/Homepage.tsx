import {
	HeroSection,
	LandingNav,
	NextTrip,
	Services,
	Testimonials,
	TopDestinations,
	SubscribeSection,
} from "../components";

const Homepage = () => {
	return (
		<main className="pt-5 lg:pt-10 flex items-center flex-col">
			<LandingNav />
			<HeroSection />
			<Services />
			<TopDestinations />
			<NextTrip />
			<Testimonials />
			<SubscribeSection />
		</main>
	);
};

export default Homepage;

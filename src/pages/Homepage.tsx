import {
	HeroSection,
	LandingNav,
	NextTrip,
	Services,
	Testimonials,
	TopDestinations,
	SubscribeSection,
	Footer,
	LoginModal,
	RegisterModal,
} from "../components";

const Homepage = () => {
	return (
		<>
			<main className="pt-5 lg:pt-10 flex items-center flex-col">
				<LandingNav />
				<HeroSection />
				<Services />
				<TopDestinations />
				<NextTrip />
				<Testimonials />
				<SubscribeSection />
				<Footer />
			</main>
			<RegisterModal />
			<LoginModal />
		</>
	);
};

export default Homepage;

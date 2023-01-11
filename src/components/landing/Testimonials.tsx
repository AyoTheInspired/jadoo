type Props = {};

const TestimonialsUnderlay = () => (
	<div className="hidden relative h-[180px] w-[400px] md:mx-auto lg:ml-auto lg:flex items-end p-7 border border-gray-200 shadow-md bg-gray-50 bg-opacity-10 rounded-lg">
		<div>
			<p className="mt-4 smb lt-txt">Chris Thomas</p>
			<p className="mb-0 lt-txt text-sm">CEO of Red Button</p>
		</div>
	</div>
);

const TestimonialsOverlay = () => (
	<div
		style={{
			boxShadow:
				" 0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)",
		}}
		className="bwite md:relative lg:absolute lg:-top-28 lg:left-[15px] rounded-lg px-6 py-10 leading-loose lt:text-lg mx-auto w-[300px] lg:w-[420px]">
		<div className="absolute -top-6 left-6 md:-left-7 lg:-top-3 lg:-left-8 h-14 w-14 rounded-full">
			<img src="/assets/images/landing/user.png" alt="user" />
		</div>
		<p className="mb-0 med lt-txt text-sm">
			“On the Windows talking painted pasture yet its express parties use. Sure
			last upon he same as knew next. Of believed or diverted no.”
		</p>
		<p className="mt-4 smb lt-txt">Mike Taylor</p>
		<p className="mb-0 lt-txt text-sm">Lahore, Pakistan</p>
	</div>
);

const Testimonials = (props: Props) => {
	return (
		<div className="centered my-8 lg:my-10 py-8 lg:py-10 flect md:flex-btw flex-wrap lg:flex-nowrap">
			<div className="w-full lg:w-2/4">
				<div className="w-full">
					<h5 className="mb-5 med font-pop lt-txt text-lg tcent lg:text-left ">
						TESTIMONIALS{" "}
					</h5>
					<p className="mb-14 text-[#14183E] tcent pl-5 md:pl-8 lg:pl-0 lg:text-left text-xl md:text-3xl lg:text-[58px] lg:leading-[65px] font-bold">
						What People Say About Us.
					</p>
				</div>
				<img
					className="hidden lg:block"
					src="assets/images/landing/test-control.png"
					alt="control"
					width={80}
				/>
			</div>
			<div className="w-full lg:w-2/4 relative">
				<TestimonialsUnderlay />
				<TestimonialsOverlay />
			</div>
		</div>
	);
};

export default Testimonials;

import React from "react";
import VerticalTextScroller from "../components/VerticalTextScroller/VerticalTextScroller.component";

const Home = () => {
	const someWords = ["Recruiting", "Training", "Retaining"];

	return (
		<div className="w-full text-primary-text">
			<div className="grid grid-rows-1">
				<div className="grid grid-cols-3 items-stretch gap-2 ">
					<div className="col-span-2 relative  w-full h-96 ">
						<img
							src="public/images/professional_man_02.jpg"
							alt=""
							className="brightness-50 rounded-br-3xl object-cover w-full h-full"
						/>
						<div className="absolute top-0 right-0 bg-transparent text-primary-background">
							<div className="mt-5 mr-10 flex flex-col items-center">
								<h2 className="text-center">
									Difficulty{" "}
									<span className="text-secondary-light">
										<VerticalTextScroller listOfWords={someWords} />
									</span>{" "}
									productive agents?{" "}
								</h2>
								<h3 className="text-center mt-3">
									Be a successfull broker-owner now!
								</h3>
							</div>
						</div>
						<div className="absolute inset-x-0 bottom-10 flex flex-col items-center">
							<h1 className="text-secondary-light font-extrabold mb-4">
								Ron Escoffery
							</h1>
							<p className="text-xl text-primary-background">
								Speaker, Advisor, Consultant{" "}
							</p>

							<button
								type="button"
								className="text-2xl p-5 bg-secondary bg-opacity-85 rounded-xl mt-2 block">
								{" "}
								Complementary Brokerage Review{" "}
							</button>
						</div>
					</div>

					<div className="col-span-1 h-full w-full ">
						<div className=" h-full  flex flex-col justify-between items-center px-7">
							<h2 className="text-secondary mt-5">Hi I'm Ron</h2>
							<p className="text-base mt-5">
								I am proud to be in this business for the last 40+ years. First
								as an Agent, then as a Broker-owner, as an Investor, and now as
								an Advisor, Mentor, Consultant, and Speaker.
							</p>

							<p className="text-base mt-3">
								Over the years, I have realized that recruiting and retaining
								productive agents is the key.
							</p>
							<p className="text-base my-5">
								But a culture of support, care, and respect will let agents stay
								even when they could leave.
							</p>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-3 items-stretch">
					<div className="col-span-1 p-5 w-full h-full">
						<div className="px-5 h-full border-2 border-primary-text shadow-md shadow-primary-text rounded-xl flex flex-col justify-between items-center">
							<h3 className="text-center mt-10">
								How is your Financial Management?
							</h3>
							<p className="mt-5 text-lg">
								Out of Recruiting, Training technology and Financial Management,
								the latter doesn't get the attention it deserves.
							</p>
							<button
								type="button"
								className="p-5 rounded-xl bg-secondary mt-10 mb-5">
								Book a Financial Review
							</button>
						</div>
					</div>

					<div className="col-span-1 h-full w-full p-5">
						<div className="px-5  h-full border-2 border-primary-text shadow-md shadow-primary-text rounded-xl flex flex-col justify-between items-center">
							<h3 className="text-center mt-10">
								How is your brokerage performing?
							</h3>
							<p className="mt-5 text-lg">
								{" "}
								Answer these 5 simple questions to find out.
							</p>
							<button
								type="button"
								className="p-5 rounded-xl bg-secondary mt-10 mb-5">
								Take the quiz Now!
							</button>
						</div>
					</div>

					<div className="col-span-1 h-full w-full p-5">
						<div className="px-5  h-full border-2 border-primary-text shadow-md shadow-primary-text rounded-xl flex flex-col justify-between items-center">
							<h3 className="text-center mt-10">How to work with me?</h3>
							<p className="mt-5 text-lg">
								{" "}
								I provide speaking engagements, recruitment and training
								guidances and consulting on your brokerage{" "}
							</p>
							<button
								type="button"
								className="p-5 rounded-xl bg-secondary mt-10 mb-5">
								Brokerage Review
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

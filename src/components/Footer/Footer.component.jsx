import React from "react";

const Footer = () => {
	return (
		<div className="w-full grid grid-cols-4 gap-2 items-stretch mb-2 pt-2">
			<div className="col-span-1 flex flex-col my-2 items-center">
				<h4 className="text-xl text-center text-secondary-dark">Other links</h4>
				<ul>
					<li>Terms and conditions</li>
					<li>Opt-out preferences</li>
				</ul>
			</div>
			<div className="col-span-1 flex flex-col my-2 items-center">
				<h4 className="text-xl text-center text-secondary-dark">My Books</h4>
				<ul>
					<li>Money for retirement</li>
					<li>The art of living well</li>
				</ul>
			</div>

			<div className="col-span-2 flex flex-col my-2 items-center">
				<h4 className="text-xl text-center text-secondary-dark">
					Sign up for my newsletter
				</h4>
				<div className="flex flex-row  px-5 gap-x-5">
					<input type="email" placeholder="you@email.com" />
					<button
						type="button"
						className="py-1 px-5 bg-secondary text-lg rounded-lg">
						{" "}
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;

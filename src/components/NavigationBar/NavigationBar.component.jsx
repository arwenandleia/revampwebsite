import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaFacebookF, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const navLinksCls = " w-full sm:w-fit text-center hover:text-secondary-light ";

const NavLinksMenu = () => (
	<>
		<Link className={navLinksCls} to="about">
			About
		</Link>
		<Link className={navLinksCls} to="products">
			Products
		</Link>
		<Link className={navLinksCls} to="contact">
			Contact
		</Link>
	</>
);

const NavigationBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className="px-2 max-w-7xl mx-auto">
			<div className=" flex flex-row justify-between items-center py-4 ">
				<div className=" flex items-center">
					<Link to="">
						<div className="flex items-center text-3xl text-secondary font-extrabold">
							Ronald G. Escoffery
						</div>
					</Link>
				</div>

				<div className="hidden  sm:flex items-center">
					<div className="text-base flex items-center sm:gap-x-7">
						{<NavLinksMenu />}
					</div>
				</div>

				<div className="hidden  sm:flex items-center justify-center">
					<div className="flex gap-x-3 text-base">
						<FaFacebookF className="hover:opacity-75 hover:cursor-pointer" />
						<FaXTwitter className="hover:opacity-75 hover:cursor-pointer" />
						<FaLinkedin className="hover:opacity-75 hover:cursor-pointer" />
					</div>
				</div>

				<div className="flex items-center cursor-pointer text-3xl  sm:hidden">
					<FaBars onClick={toggleMenuOpen} className="p-1 " />
				</div>
			</div>

			{isMenuOpen && (
				<div className=" flex flex-col items-center sm:hidden">
					{<NavLinksMenu />}
				</div>
			)}
		</nav>
	);
};

export default NavigationBar;

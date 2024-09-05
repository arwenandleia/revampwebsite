import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar.component";
import Footer from "../components/Footer/Footer.component";

const MainNavigation = () => {
	return (
		<div className="bg-primary-background bg-opacity-5 text-primary-text h-screen flex flex-col justify-stretch">
			<div className=" w-full bg-primary-background bg-opacity-15">
				<div className="max-w-7xl mx-auto ">
					<NavigationBar />
				</div>
			</div>

			<div className="w-full max-w-7xl mx-auto  overflow-y-auto scroll-smooth no-scrollbar h-full">
				<Outlet />
			</div>

			<div className="w-full bg-primary-background bg-opacity-15 ">
				<div className="max-w-7xl mx-auto">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default MainNavigation;

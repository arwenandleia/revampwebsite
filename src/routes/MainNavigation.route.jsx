import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar.component";
import Footer from "../components/Footer/Footer.component";

const MainNavigation = () => {
	return (
		<div className="">
			<div className="">
				<NavigationBar />
			</div>
			<div className="">
				<Outlet />
			</div>

			<div className="">
				<Footer />
			</div>
		</div>
	);
};

export default MainNavigation;

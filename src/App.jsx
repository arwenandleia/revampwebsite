import { Routes, Route } from "react-router-dom";
import MainNavigation from "./routes/MainNavigation.route";
import Home from "./pages/Home.page";

function App() {
	return (
		<Routes>
			<Route path="/revampwebsite/*" element={<MainNavigation />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;

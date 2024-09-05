import { Routes, Route } from "react-router-dom";
import MainNavigation from "./routes/MainNavigation.route";

function App() {
	return (
		<Routes>
			<Route path="/*" element={<MainNavigation />}></Route>
		</Routes>
	);
}

export default App;

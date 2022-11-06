import Navigation from "./components/Navigation";
import Home from "./Home";
import Voting from "./Voting";
import About from "./About";
import Mess from "./Voting/Mess"
import Trendles from "./Voting/Trendles"
import BeachHouse from "./Voting/BeachHouse"
import BetaLabs from "./Voting/BetaLabs"
import Success from "./Success"
import ScrollToTop from "./ScrolltoTop";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			<Router>
				<ScrollToTop/>
				<Navigation />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/voting" element={<Voting />} />
					<Route path="/about" element={<About />} />
					<Route path="/voting/mess" element={<Mess />} />
					<Route path="/voting/trendles" element={<Trendles />} />
					<Route path="/voting/beachhouse" element={<BeachHouse />} />
					<Route path="/voting/betalabs" element={<BetaLabs />} />
					<Route path="/voting/success" element={<Success />} />
					{/* <Route path="/contactus" component={ContactUs} /> */}
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;

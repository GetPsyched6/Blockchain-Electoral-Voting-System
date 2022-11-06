import "./home.css";
import Button from "./components/Button";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="wrapper">
			<h1 className="title">We present to you, the future of voting.</h1>
			<span className="button_text_wrap">
				<Link to="/voting">
					<Button />
				</Link>
				<p>Start voting today. Begin by clicking on the big button.</p>
			</span>
		</div>
	);
};

export default Home;

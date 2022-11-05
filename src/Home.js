import "./home.css";
import Button from "./components/Button";

const Home = () => {
	return (
		<div className="wrapper">
			<h1 className="title">We present to you, the future of voting.</h1>
			<span className="button_text_wrap">
				<Button />
				<p>Start voting today. Begin by connecting your wallet.</p>
			</span>
		</div>
	);
};

export default Home;

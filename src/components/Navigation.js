import "./navigation.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<>
			<div className="wrapper_nav">
				<nav className="navigation">
					<ul className="nav_ele">
						<li className="nav_li">
							<Link to="/">
								<img src={logo} alt="Logo" />
							</Link>
						</li>
						<li className="nav_li">
							<Link to="/about">About</Link>
						</li>
						<li className="nav_li">ETH Wallet Connected</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navigation;

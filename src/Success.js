import "./success.css";
import { Link } from "react-router-dom";
import Button from "./components/Button";


const Success = () => {
	return (
		<>
			<div className="wrapper">
				<h1 className="title">Thank you for voting!</h1>
        <h2 className="go_home">Vote for another topic by clicking the button below.</h2>
        <Link to="/voting">
        <Button />
        </Link>
			</div>
		</>
	);
};

export default Success;

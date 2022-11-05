import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import "./button.css"

const Button = () => {
	return (
		<>
			<button className="btn" type="button">
				<ArrowForwardSharpIcon className="icon" fontSize="large" />
			</button>
		</>
	);
};

export default Button;

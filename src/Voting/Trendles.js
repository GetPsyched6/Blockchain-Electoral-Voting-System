import { useCallback } from "react";
import "./voting_people.css";
import PortraitRoundedIcon from "@mui/icons-material/PortraitRounded";
import { Link, useNavigate } from "react-router-dom";

const Trendles = () => {
	const navigate = useNavigate();
	const handleOnClick = useCallback(
		() => navigate("/voting/success", { replace: true }),
		[navigate]
	);
	const wait = () => {
		setTimeout(handleOnClick, 5000);
		let button = document.querySelector(".button_h2");
		let button_a = document.querySelector(".sub");
		button.textContent = "Voting in Progress";
		button.classList.add("func");
		button_a.classList.add("button_color");
	};

	return (
		<div className="wrapper">
			<h1 className="t_vote">Who will you vote for?</h1>
			<hr></hr>
			<div className="voting_people">
				<label className="vote_topic_people">
					<div className="user_people">
						<PortraitRoundedIcon style={{ fontSize: 60, color: "#105274bb" }} />
						<h2 className="vote_name">Jackson Grimme</h2>
					</div>
					<div className="inputs">
						<input type="radio" name="voteable" className="radioo" />
						<span className="checkmark"></span>
					</div>
				</label>
				<label className="vote_topic_people">
					<div className="user_people">
						<PortraitRoundedIcon style={{ fontSize: 60, color: "#551277bb" }} />
						<h2 className="vote_name">Larry Page</h2>
					</div>
					<div className="inputs">
						<input type="radio" name="voteable" className="radioo" />
						<span className="checkmark"></span>
					</div>
				</label>
				<label className="vote_topic_people">
					<div className="user_people">
						<PortraitRoundedIcon style={{ fontSize: 60, color: "#108933bb" }} />
						<h2 className="vote_name">Jonathan Melda</h2>
					</div>
					<div className="inputs">
						<input type="radio" name="voteable" className="radioo" />
						<span className="checkmark"></span>
					</div>
				</label>
				<label className="vote_topic_people">
					<div className="user_people">
						<PortraitRoundedIcon style={{ fontSize: 60, color: "#874530bb" }} />
						<h2 className="vote_name">Samantha Gordon</h2>
					</div>
					<div className="inputs">
						<input type="radio" name="voteable" className="radioo" />
						<span className="checkmark"></span>
					</div>
				</label>
				<button className="sub" onClick={wait}>
					<h2 className="button_h2">Vote</h2>
				</button>
			</div>
		</div>
	);
};

export default Trendles;

import "./voting_people.css";
import PortraitRoundedIcon from "@mui/icons-material/PortraitRounded";
import { Link } from "react-router-dom";

const Mess = () => {
	return (
		<div className="wrapper">
			<h1 className="t_vote">What will you vote for?</h1>
			<hr></hr>
			<div className="voting_people">
				<label className="vote_topic_people">
					<div className="user_people">
						<PortraitRoundedIcon style={{ fontSize: 60, color: "#105274bb" }} />
						<h2 className="vote_name">Space Song</h2>
					</div>
					<div className="inputs">
						<input type="radio" name="voteable" className="radioo" />
						<span className="checkmark"></span>
					</div>
				</label>
				<label className="vote_topic_people">
					<div className="user_people">
						<PortraitRoundedIcon style={{ fontSize: 60, color: "#551277bb" }} />
						<h2 className="vote_name">Lemon Glow</h2>
					</div>
					<div className="inputs">
						<input type="radio" name="voteable" className="radioo" />
						<span className="checkmark"></span>
					</div>
				</label>
				<label className="vote_topic_people">
					<div className="user_people">
						<PortraitRoundedIcon style={{ fontSize: 60, color: "#108933bb" }} />
						<h2 className="vote_name">Lazuli</h2>
					</div>
					<div className="inputs">
						<input type="radio" name="voteable" className="radioo" />
						<span className="checkmark"></span>
					</div>
				</label>
				<label className="vote_topic_people">
					<div className="user_people">
						<PortraitRoundedIcon style={{ fontSize: 60, color: "#874530bb" }} />
						<h2 className="vote_name">Heart of Chambers</h2>
					</div>
					<div className="inputs">
						<input type="radio" name="voteable" className="radioo" />
						<span className="checkmark"></span>
					</div>
				</label>
				<Link to="/voting/success" className="link_block">
					<button className="sub">
						<h2 className="button_h2">Vote</h2>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Mess;

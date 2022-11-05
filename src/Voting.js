import "./voting.css";
import { Link } from "react-router-dom";

const Voting = () => {
	return (
		<div className="wrapper">
			<h1 className="t_vote">What will you vote for?</h1>
			<hr></hr>
			<div className="voting">
				<Link to="/voting/mess" className="link_block">
					<div className="vote_topic">
						<h2 className="vote_name">Mess Lead Election</h2>
						<h1>{">"}</h1>
					</div>
				</Link>
				<Link to="/voting/betalabs" className="link_block">
					<div className="vote_topic">
						<h2 className="vote_name">BetaLabs Lead Election</h2>
						<h1>{">"}</h1>
					</div>
				</Link>
				<Link to="/voting/trendles" className="link_block">
					<div className="vote_topic">
						<h2 className="vote_name">Trendles Sublead Election</h2>
						<h1>{">"}</h1>
					</div>
				</Link>
				<Link to="/voting/beachhouse" className="link_block">
					<div className="vote_topic">
						<h2 className="vote_name">Beach House Setlist Election</h2>
						<h1>{">"}</h1>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Voting;

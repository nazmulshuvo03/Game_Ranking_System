import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const MatchDetails = (props) => {
	const { match } = props;
	//console.log(match);
	return (
		<div className="container">
			<div key={match.id} className="card matchDetails">
				<div className="card-title center-align matchTitle">
					<span className="hoverable card playerName">{match.winner}</span>
					<span> VS </span>
					<span className="hoverable card playerName">{match.loser}</span>
				</div>
				<div className="center-align announce">
					<span className="winnerLabel grey-text text-darken-2">And The Winner Is : </span>
					<span className="winnerName cyan-text text-darken-1 pulse">{match.winner}</span>
				</div>
				<div className="center-align date">{moment(match.date).calendar()}</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownprops) => {
	//console.log(state, ownprops);
	const id = ownprops.match.params.id;
	const matches = state.match.matches;
	const match = matches ? matches[id] : null;
	return {
		match: match
	};
};

export default connect(mapStateToProps)(MatchDetails);

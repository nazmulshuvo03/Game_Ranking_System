import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const TvTMatchDetails = (props) => {
	const { match } = props;
	//console.log(match);
	return (
		<div className="">
			<div key={match.id} className="card matchDetails">
				<div className="card-title center-align matchTitle">
					<span className="hoverable card playerName">{match.winner[0] + ' & ' + match.winner[1]}</span>
					<span> VS </span>
					<span className="hoverable card playerName">{match.loser[0] + ' & ' + match.loser[1]}</span>
				</div>
				<div className="center-align announce">
					<span className="winnerLabel grey-text text-darken-2">And The Winner Is : </span>
					<span className="winnerName cyan-text text-darken-1 pulse">
						{match.winner[0] + ' & ' + match.winner[1]}
					</span>
				</div>
				<div className="center-align date">{moment(match.date).calendar()}</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownprops) => {
	//console.log(state, ownprops);
	const id = ownprops.match.params.id;
	const tvTmatches = state.tvTmatch.tvTmatches;
	const match = tvTmatches ? tvTmatches[id] : null;
	return {
		match: match
	};
};

export default connect(mapStateToProps)(TvTMatchDetails);

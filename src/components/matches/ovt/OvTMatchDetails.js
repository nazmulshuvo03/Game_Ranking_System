import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const OvTMatchDetails = (props) => {
	const { match } = props;
	//console.log(match);
	return (
		<div className="container">
			<div key={match.id} className="card matchDetails">
				<div className="card-title center-align matchTitle">
					<div className="hoverable card playerName">
						<span>{match.winner[0]}</span>
						{match.winner[1] ? <span>{' & ' + match.winner[1]}</span> : ''}
					</div>
					<span> VS </span>
					<div className="hoverable card playerName">
						<span>{match.loser[0]}</span>
						{match.loser[1] ? <span>{' & ' + match.loser[1]}</span> : ''}
					</div>
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
	const ovTmatches = state.ovTmatch.ovTmatches;
	const match = ovTmatches ? ovTmatches[id] : null;
	return {
		match: match
	};
};

export default connect(mapStateToProps)(OvTMatchDetails);

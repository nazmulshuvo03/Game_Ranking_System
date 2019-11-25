import React from 'react';
import moment from 'moment';

const TvTSingleMatch = (props) => {
	const { match } = props;
	return (
		<div key={match.id} className="card-panel hoverable singleMatchItem">
			<div className="row">
				<div className="col s5 center-align">
					<div className="row">
						<div className="col s12">{match.winner[0]}</div>
						<div className="col s12"> & {match.winner[1]}</div>
					</div>
				</div>
				<div className="col s2">vs</div>
				<div className="col s5 center-align">
					<div className="row">
						<div className="col s12">{match.loser[0]}</div>
						<div className="col s12"> & {match.loser[1]}</div>
					</div>
				</div>
			</div>
			<div className="center-align">{moment(match.date).calendar()}</div>
		</div>
	);
};

export default TvTSingleMatch;

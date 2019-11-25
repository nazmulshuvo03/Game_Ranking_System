import React from 'react';
import moment from 'moment';

const SingleMatch = (props) => {
	const { match } = props;
	return (
		<div key={match.id} className="card-panel hoverable singleMatchItem">
			<div className="row">
				<div className="col s5 center-align">{match.winner}</div>
				<div className="col s2">vs</div>
				<div className="col s5 center-align">{match.loser}</div>
			</div>
			<div className="center-align">{moment(match.date).calendar()}</div>
		</div>
	);
};

export default SingleMatch;

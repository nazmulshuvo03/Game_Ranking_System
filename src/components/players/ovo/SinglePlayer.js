import React from 'react';

const SinglePlayer = (props) => {
	const { player } = props;
	return (
		<div key={player.id} className="card-panel hoverable row singlePlayerItem">
			<div className="col s8">{player.name}</div>
			<div className="col s3 offset-s1">{winPercentage(player.total, player.wins)}</div>
			<div className="progress">
				<div className="determinate" style={{ width: winPercentage(player.total, player.wins) }} />
			</div>
		</div>
	);
};

const winPercentage = (total, wins) => {
	return total ? (wins * 100 / total).toFixed(2) + '%' : '0.00%';
};

export default SinglePlayer;

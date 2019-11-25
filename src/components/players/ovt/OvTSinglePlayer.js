import React from 'react';

const OvTSinglePlayer = (props) => {
	const { player } = props;
	//console.log(player);
	return (
		<div key={player.id} className="card-panel hoverable row singlePlayerItem">
			<div className="col s5">{player.name[0]}</div>
			{player.name[1] ? (
				<div>
					<div className="col s2">&</div>
					<div className="col s5">{player.name[1]}</div>
				</div>
			) : (
				''
			)}
			<div className="center">{winPercentage(player.total, player.wins)}</div>
			<div className="progress">
				<div className="determinate" style={{ width: winPercentage(player.total, player.wins) }} />
			</div>
		</div>
	);
};

const winPercentage = (total, wins) => {
	return total ? (wins * 100 / total).toFixed(2) + '%' : '0.00%';
};

export default OvTSinglePlayer;

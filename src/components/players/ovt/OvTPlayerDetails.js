import React from 'react';
import { connect } from 'react-redux';

import OvTWinDetails from './OvTWinDetails';

const winPercentage = (wins, total) => {
	return total ? (wins * 100 / total).toFixed(2) + '%' : 0 + '%';
};

const OvTPlayerDetails = (props) => {
	const { player, opponents } = props;
	//console.log(player, opponents);
	return (
		<div key={player.id} className="container">
			<h3 className="center-align indigo-text text-darken-2 playerFullName">
				{
					<div>
						<div>{player.name[0]}</div>
						<div>{player.name[1] ? ' & ' + player.name[1] : ''}</div>
					</div>
				}
			</h3>
			<div className="row totalRate">
				<div className="col s4">Total Plays: {player.total}</div>
				<div className="col s4">Total Wins: {player.wins}</div>
				<div className="col s4">Win Percentage: {winPercentage(player.wins, player.total)}</div>
				<div className="progress">
					<div className="determinate" style={{ width: winPercentage(player.wins, player.total) }} />
				</div>
			</div>
			<OvTWinDetails player={player} opponents={opponents} />
		</div>
	);
};

const mapStateToProps = (state, ownprops) => {
	//console.log(ownprops);
	const id = ownprops.match.params.id;
	const ovTplayers = state.ovTplayer.ovTplayers;
	const player = ovTplayers ? ovTplayers[id] : null;
	const opponents = ovTplayers.filter((man) => {
		if (man.name !== player.name) return man;
	});
	//console.log(players, opponents);
	return {
		player,
		opponents
	};
};

export default connect(mapStateToProps)(OvTPlayerDetails);

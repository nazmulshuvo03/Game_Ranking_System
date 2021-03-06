import React from 'react';

const winCount = (player, opponents) => {
	const winAgainst = player.winAgainst;
	let winList = [];
	//console.log(winAgainst);
	opponents.forEach((opponent, i) => {
		winList.push({
			id: i,
			name: opponent.name,
			wins: 0,
			loses: 0
		});
	});
	winList.forEach((win) => {
		winAgainst.forEach((loser) => {
			if (
				(win.name[0] === loser[0] && win.name[1] === loser[1]) ||
				(win.name[0] === loser[1] && win.name[1] === loser[0])
			) {
				win.wins += 1;
			}
		});
	});
	opponents.forEach((opponent) => {
		opponent.winAgainst.forEach((loses) => {
			if (
				(player.name[0] === loses[0] && player.name[1] === loses[1]) ||
				(player.name[1] === loses[0] && player.name[0] === loses[1])
			) {
				winList.forEach((win) => {
					if (
						(win.name[0] === opponent.name[0] && win.name[1] === opponent.name[1]) ||
						(win.name[1] === opponent.name[0] && win.name[0] === opponent.name[1])
					) {
						win.loses += 1;
					}
				});
			}
		});
	});
	//console.log(winList);
	return winList;
};

const winPercentage = (wins, loses) => {
	return wins ? (wins * 100 / (wins + loses)).toFixed(2) + '%' : '0.00%';
};

const losePercentage = (wins, loses) => {
	return loses ? (loses * 100 / (wins + loses)).toFixed(2) + '%' : '0.00%';
};

const OvTWinDetails = (props) => {
	const { player, opponents } = props;
	return (
		<div className="collection with-header records">
			<h4 className="center-align collection-header grey-text text-darken-2">Records</h4>
			<div className="row recordHeader grey-text text-darken-2">
				<div className="col s4">
					<div className="row">
						<div className="col s1 offset-s1 center-align">Wins</div>
						<div className="col s9 center-align">Win Percentage</div>
					</div>
				</div>
				<div className="col s4 center-align">Against</div>
				<div className="col s4">
					<div className="row center">
						<div className="col s2">Loses</div>
						<div className="col s10">Losing Percentage</div>
					</div>
				</div>
			</div>
			{winCount(player, opponents).map((winList, i) => {
				//console.log(winList);
				const { name, wins, loses } = winList;
				return (
					<div key={i} className="row card-panel winCardPannel">
						{/* win details */}
						<div className="col s4">
							<div className="row">
								<div className="col s6">{wins}</div>
								<div className="col s6">{winPercentage(wins, loses)}</div>
							</div>
							<div className="progress purple lighten-3">
								<div
									className="determinate purple darken-4"
									style={{ width: winPercentage(wins, loses) }}
								/>
							</div>
						</div>

						{/* name */}
						<div className="col s4 center-align against">
							{
								<div>
									<div>{name[0]}</div>
									<div>{name[1] ? ' & ' + name[1] : ''}</div>
								</div>
							}
						</div>

						{/* lose detail */}
						<div className="col s4">
							<div className="row">
								<div className="col s6">{loses}</div>
								<div className="col s6">{losePercentage(wins, loses)}</div>
							</div>
							<div className="progress red lighten-3">
								<div
									className="determinate red darken-4 "
									style={{ width: losePercentage(wins, loses) }}
								/>
							</div>
						</div>
					</div>
				);
			})};
		</div>
	);
};

export default OvTWinDetails;

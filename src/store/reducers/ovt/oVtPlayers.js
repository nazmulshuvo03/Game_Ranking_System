const initState = {
	ovTplayers: [
		{
			id: 1,
			name: [ 'Neymar' ],
			total: 1,
			winAgainst: [ [ 'Eden Hazard', 'Kylian Mbappé' ] ],
			wins: 1
		},
		{
			id: 2,
			name: [ 'Harry Kane', 'Cristiano Ronaldo' ],
			total: 1,
			winAgainst: [ [ 'Lionel Messi' ] ],
			wins: 1
		},
		{
			id: 3,
			name: [ 'Eden Hazard', 'Kylian Mbappé' ],
			total: 1,
			winAgainst: [],
			wins: 0
		},
		{
			id: 4,
			name: [ 'Lionel Messi' ],
			total: 1,
			winAgainst: [],
			wins: 0
		}
	]
};

const oVtPlayers = (state = initState, action) => {
	//console.log(state);
	switch (action.type) {
		case 'ADD_PAIR_OvT':
			//console.log(action.pair);
			return {
				ovTplayers: [ action.pair, ...state.ovTplayers ]
			};

		case 'SCORE_OvT_UPDATED':
			return {
				ovTplayers: [ ...state.ovTplayers ]
			};

		case 'OPPONENTS_OvT':
			let OvTwinner = action.opponents.winner;
			let OvTloser = action.opponents.loser;
			//console.log(TvTwinner, TvTloser);
			// eslint-disable-next-line no-lone-blocks
			state.ovTplayers &&
				state.ovTplayers.forEach((player) => {
					if (
						player.name[0] === OvTwinner[0] ||
						player.name[0] === OvTwinner[1] ||
						player.name[1] === OvTwinner[0] ||
						player.name[1] === OvTwinner[1]
					) {
						return {
							[player.winAgainst]: [ player.winAgainst.push(OvTloser) ]
						};
					}
					//console.log(player.winAgainst);
				});

		default:
			return state;
	}
};

export default oVtPlayers;

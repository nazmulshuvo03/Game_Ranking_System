const initState = {
	tvTplayers: [
		{
			id: 1,
			name: [ 'Neymar', 'Lionel Messi' ],
			total: 1,
			winAgainst: [ [ 'Eden Hazard', 'Kylian Mbappé' ] ],
			wins: 1
		},
		{
			id: 2,
			name: [ 'Lionel Messi', 'Luis Suárez' ],
			total: 1,
			winAgainst: [ [ 'Harry Kane', 'Cristiano Ronaldo' ] ],
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
			name: [ 'Harry Kane', 'Cristiano Ronaldo' ],
			total: 1,
			winAgainst: [],
			wins: 0
		}
	]
};

const tVtPlayers = (state = initState, action) => {
	//console.log(state);
	switch (action.type) {
		case 'ADD_PAIR':
			//console.log(action.pair);
			return {
				tvTplayers: [ action.pair, ...state.tvTplayers ]
			};

		case 'SCORE_TvT_UPDATED':
			return {
				tvTplayers: [ ...state.tvTplayers ]
			};

		case 'OPPONENTS_TvT':
			let TvTwinner = action.opponents.winner;
			let TvTloser = action.opponents.loser;
			//console.log(TvTwinner, TvTloser);
			// eslint-disable-next-line no-lone-blocks
			state.tvTplayers &&
				state.tvTplayers.forEach((player) => {
					if (
						player.name[0] === TvTwinner[0] ||
						player.name[0] === TvTwinner[1] ||
						player.name[1] === TvTwinner[0] ||
						player.name[1] === TvTwinner[1]
					) {
						return {
							[player.winAgainst]: [ player.winAgainst.push(TvTloser) ]
						};
					}
					//console.log(player.winAgainst);
				});

		default:
			return state;
	}
};

export default tVtPlayers;

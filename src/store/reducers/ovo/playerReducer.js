const initState = {
	players: [
		{
			id: 1,
			name: 'Cristiano Ronaldo',
			total: 0,
			winAgainst: [],
			wins: 0
		},
		{
			id: 2,
			name: 'Lionel Messi',
			total: 2,
			winAgainst: [ 'Harry Kane' ],
			wins: 1
		},
		{
			id: 3,
			name: 'Kylian Mbappé',
			total: 0,
			winAgainst: [],
			wins: 0
		},

		{
			id: 4,
			name: 'Eden Hazard',
			total: 1,
			winAgainst: [],
			wins: 0
		},

		{
			id: 5,
			name: 'Harry Kane',
			total: 1,
			winAgainst: [],
			wins: 0
		},
		{
			id: 6,
			name: 'Neymar',
			total: 1,
			winAgainst: [ 'Eden Hazard' ],
			wins: 1
		},

		{
			id: 7,
			name: 'Luis Suárez',
			total: 1,
			winAgainst: [ 'Lionel Messi' ],
			wins: 1
		}
	]
};

const playerReducer = (state = initState, action) => {
	//console.log(state);
	switch (action.type) {
		case 'ADD_PLAYER':
			return {
				players: [ action.player, ...state.players ]
			};

		case 'SCORE_UPDATED':
			return {
				players: [ ...state.players ]
			};

		case 'OPPONENTS':
			let winner = action.opponents.winner;
			let loser = action.opponents.loser;
			//console.log(winner, loser);
			state.players.map((player) => {
				if (player.name === winner) {
					return {
						[player.winAgainst]: [ player.winAgainst.push(loser) ]
					};
				}
			});

		default:
			return state;
	}
};

export default playerReducer;

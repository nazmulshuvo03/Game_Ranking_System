const initState = {
	tvTmatches: [
		{
			id: 1,
			winner: [ 'Neymar', 'Lionel Messi' ],
			loser: [ 'Eden Hazard', 'Kylian Mbappé' ],
			date: new Date()
		},
		{
			id: 2,
			winner: [ 'Lionel Messi', 'Luis Suárez' ],
			loser: [ 'Harry Kane', 'Cristiano Ronaldo' ],
			date: new Date()
		}
	]
};

const tVtMatches = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_TvT_MATCH':
			return {
				tvTmatches: [ action.match, ...state.tvTmatches ]
			};
		default:
			return state;
	}
};

export default tVtMatches;

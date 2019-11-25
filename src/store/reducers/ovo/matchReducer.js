const initState = {
	matches: [
		{
			id: 1,
			winner: 'Neymar',
			loser: 'Eden Hazard',
			date: new Date()
		},
		{
			id: 2,
			winner: 'Lionel Messi',
			loser: 'Harry Kane',
			date: new Date()
		},
		{
			id: 3,
			winner: 'Luis Suárez',
			loser: 'Lionel Messi',
			date: new Date()
		}
	]
};

const matchReducer = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_MATCH':
			return {
				matches: [ action.match, ...state.matches ]
			};

		default:
			return state;
	}
};

export default matchReducer;

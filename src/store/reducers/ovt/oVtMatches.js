const initState = {
	ovTmatches: [
		{
			id: 1,
			winner: [ 'Neymar' ],
			loser: [ 'Eden Hazard', 'Kylian Mbappé' ],
			date: new Date()
		},
		{
			id: 2,
			winner: [ 'Harry Kane', 'Cristiano Ronaldo' ],
			loser: [ 'Lionel Messi' ],
			date: new Date()
		}
	]
};

const oVtMatches = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_OvT_MATCH':
			return {
				ovTmatches: [ action.match, ...state.ovTmatches ]
			};
		default:
			return state;
	}
};

export default oVtMatches;

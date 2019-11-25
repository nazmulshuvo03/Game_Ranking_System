export const addPlayer = (player) => {
	return {
		type: 'ADD_PLAYER',
		player
	};
};

export const addPair = (pair) => {
	return {
		type: 'ADD_PAIR',
		pair
	};
};

export const addPairOvT = (pair) => {
	return {
		type: 'ADD_PAIR_OvT',
		pair
	};
};

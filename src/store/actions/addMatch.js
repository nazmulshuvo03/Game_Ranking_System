export const addMatch = (match) => {
	return {
		type: 'ADD_MATCH',
		match
	};
};

export const addTvTMatch = (match) => {
	return {
		type: 'ADD_TvT_MATCH',
		match
	};
};

export const addOvTMatch = (match) => {
	return {
		type: 'ADD_OvT_MATCH',
		match
	};
};

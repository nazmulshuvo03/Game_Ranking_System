export const opponent = (opponents) => {
	return {
		type: 'OPPONENTS',
		opponents
	};
};

export const opponentTvT = (opponents) => {
	return {
		type: 'OPPONENTS_TvT',
		opponents
	};
};

export const opponentOvT = (opponents) => {
	return {
		type: 'OPPONENTS_OvT',
		opponents
	};
};

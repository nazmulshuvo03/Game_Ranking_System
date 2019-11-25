export const scoreUpdate = (updatedPlayers) => {
	return {
		type: 'SCORE_UPDATED',
		updatedPlayers
	};
};

export const scoreTvTUpdate = (updatedPlayers) => {
	return {
		type: 'SCORE_TvT_UPDATED',
		updatedPlayers
	};
};

export const scoreOvTUpdate = (updatedPlayers) => {
	return {
		type: 'SCORE_OvT_UPDATED',
		updatedPlayers
	};
};

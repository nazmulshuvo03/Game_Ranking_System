import { combineReducers } from 'redux';

import playerReducer from './ovo/playerReducer';
import matchReducer from './ovo/matchReducer';
import tVtPlayers from './tvt/tVtPlayers';
import tVtMatches from './tvt/tVtMatches';
import oVtPlayers from './ovt/oVtPlayers';
import oVtMatches from './ovt/oVtMatches';

const rootReducer = combineReducers({
	player: playerReducer,
	match: matchReducer,
	tvTplayer: tVtPlayers,
	tvTmatch: tVtMatches,
	ovTplayer: oVtPlayers,
	ovTmatch: oVtMatches
});

export default rootReducer;

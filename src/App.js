import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';
import Home from './Home';
import MatchDetails from './components/matches/ovo/MatchDetails';
import PlayerDetails from './components/players/ovo/PlayerDetails';
import TvTPlayerDetails from './components/players/tvt/TvTPlayerDetails';
import TvTMatchDetails from './components/matches/tvt/TvTMatchDetails';
import OvTPlayerDetails from './components/players/ovt/OvTPlayerDetails';
import OvTMatchDetails from './components/matches/ovt/OvTMatchDetails';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="center-align cyan-text text-darken-1 title">Uprise Foosball Ranking System</div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/match_details/:id" component={MatchDetails} />
					<Route path="/player_details/:id" component={PlayerDetails} />
					<Route path="/tvtplayer_details/:id" component={TvTPlayerDetails} />
					<Route path="/tvtmatch_details/:id" component={TvTMatchDetails} />
					<Route path="/ovtplayer_details/:id" component={OvTPlayerDetails} />
					<Route path="/ovtmatch_details/:id" component={OvTMatchDetails} />
				</Switch>
				<ToastContainer enableMultiContainer autoClose={2000} position={toast.POSITION.TOP_CENTER} />
			</BrowserRouter>
		);
	}
}

export default App;

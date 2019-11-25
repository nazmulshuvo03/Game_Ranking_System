import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addMatch } from '../../../store/actions/addMatch';
import { scoreUpdate } from '../../../store/actions/scoreUpdate';
import { opponent } from '../../../store/actions/opponent';

class NewMatch extends Component {
	state = {
		id: 0,
		winner: '',
		loser: '',
		date: new Date()
	};

	handleWinner = (e) => {
		this.setState({
			winner: e.value
		});
	};

	handleLoser = (e) => {
		this.setState({
			loser: e.value
		});
	};

	setId = (totalMatch) => {
		this.setState({
			id: totalMatch + 1
		});
	};

	setUpdate = () => {
		const players = this.props.players.map((player) => {
			if (this.state.winner === player.name) {
				player.total += 1;
				player.wins += 1;
			}
			if (this.state.loser === player.name) {
				player.total += 1;
			}
			return player;
		});
		return players;
		//console.log(players);
	};

	opponents = (stateWinner, stateloser) => {
		let { winner, loser } = {};
		this.props.players.map((player) => {
			if (player.name === stateWinner) {
				winner = player.name;
			}
			if (player.name === stateloser) {
				loser = player.name;
			}
		});
		//console.log(winner, loser);
		return { winner, loser };
	};

	playerNames = (players) => {
		let playerNameList = [];
		players.forEach((player) => {
			playerNameList.push({
				value: player.name,
				label: player.name
			});
		});
		//console.log(playerNameList);
		return playerNameList;
	};

	notify = () => toast.warn('Players are not valid !');

	handleSubmit = (e) => {
		e.preventDefault();
		this.setId(this.props.totalMatch);
		if (this.state.winner === '' || this.state.loser === '' || this.state.winner === this.state.loser) {
			this.notify();
		} else {
			this.props.addMatch(this.state);
			this.props.scoreUpdate(this.setUpdate());
			this.props.opponent(this.opponents(this.state.winner, this.state.loser));
		}
		//console.log(this.state);
	};

	render() {
		const { players } = this.props;
		const playrNameList = this.playerNames(players);
		//console.log(playrNameList);
		return (
			<div className="newMatchCard center-align">
				<h3 className="center grey-text text-darken-2 newMatch">New Match</h3>
				<div className="row">
					<Select
						className="col s6"
						options={playrNameList}
						onChange={this.handleWinner}
						placeholder="Winner"
						isSearchable="true"
					/>
					<Select
						className="col s6"
						options={playrNameList}
						onChange={this.handleLoser}
						placeholder="Opponent"
						isSearchable="true"
					/>
					{/* <input id="loser" type="text" placeholder="Loser" onChange={this.handleChange} /> */}
				</div>
				<div className="row center">
					<button type="submit" className="btn hoverable" onClick={this.handleSubmit}>
						Add Match
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	//console.log(state.player.players);
	return {
		totalMatch: state.match.matches.length,
		matches: state.match.matches,
		players: state.player.players
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addMatch: (match) => dispatch(addMatch(match)),
		scoreUpdate: (updatedPlayers) => dispatch(scoreUpdate(updatedPlayers)),
		opponent: (opponents) => dispatch(opponent(opponents))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMatch);

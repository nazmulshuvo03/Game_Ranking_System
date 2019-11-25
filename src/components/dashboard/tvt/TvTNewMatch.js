import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addTvTMatch } from '../../../store/actions/addMatch';
import { scoreTvTUpdate } from '../../../store/actions/scoreUpdate';
import { opponentTvT } from '../../../store/actions/opponent';
import { addPair } from '../../../store/actions/addPlayer';

class TvTNewMatch extends Component {
	state = {
		id: 0,
		winner1: '',
		winner2: '',
		loser1: '',
		loser2: '',
		date: new Date()
	};

	handleWinner1 = (e) => {
		this.setState({
			winner1: e.value
		});
	};

	handleWinner2 = (e) => {
		this.setState({
			winner2: e.value
		});
	};

	handleLoser1 = (e) => {
		this.setState({
			loser1: e.value
		});
	};

	handleLoser2 = (e) => {
		this.setState({
			loser2: e.value
		});
	};

	setId = (totalMatch) => {
		this.setState({
			id: totalMatch + 1
		});
	};

	setUpdate = () => {
		const tvTplayers = this.props.tvTplayers.map((player) => {
			//console.log(this.state.winner1, player.name[0]);
			if (
				(this.state.winner1 === player.name[0] || this.state.winner1 === player.name[1]) &&
				(this.state.winner2 === player.name[0] || this.state.winner2 === player.name[1])
			) {
				player.total += 1;
				player.wins += 1;
			}
			if (
				(this.state.loser1 === player.name[0] || this.state.loser1 === player.name[1]) &&
				(this.state.loser2 === player.name[0] || this.state.loser2 === player.name[1])
			) {
				player.total += 1;
			}
			return player;
		});

		return tvTplayers;
		//console.log(players);
	};

	opponents = (stateWinner1, stateloser1, stateWinner2, stateloser2) => {
		let winner1 = '';
		let loser1 = '';
		let winner2 = '';
		let loser2 = '';
		this.props.tvTplayers.map((player) => {
			//console.log(player.name[0], stateloser1, winner1);
			if (player.name[0] === stateWinner1 && player.name[1] === stateWinner2) {
				winner1 = player.name[0];
				winner2 = player.name[1];
			}
			if (player.name[0] === stateWinner2 && player.name[1] === stateWinner1) {
				winner2 = player.name[0];
				winner1 = player.name[1];
			}
			if (player.name[0] === stateloser1 && player.name[1] === stateloser2) {
				loser1 = player.name[0];
				loser2 = player.name[1];
			}
			if (player.name[0] === stateloser2 && player.name[1] === stateloser1) {
				loser2 = player.name[0];
				loser1 = player.name[1];
			}
		});
		//console.log([ winner1, winner2 ], [ loser1, loser2 ]);
		return {
			winner: [ winner1, winner2 ],
			loser: [ loser1, loser2 ]
		};
	};

	newPair = () => {
		const id = Math.random().toFixed(5);
		const total = 1;
		const wins = 1;
		//console.log(winner, loser);
		return {
			id,
			name: [ this.state.winner1, this.state.winner2 ],
			total,
			winAgainst: [ this.state.loser1, this.state.loser2 ],
			wins
		};
	};

	formatState = (state) => {
		return {
			id: state.id,
			winner: [ state.winner1, state.winner2 ],
			loser: [ state.loser1, state.loser2 ],
			date: state.date
		};
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

	notify = () => toast.error('Players are not valid !');

	handleSubmit = (e) => {
		e.preventDefault();
		this.setId(this.props.totalMatch);
		if (
			this.state.winner1 === '' ||
			this.state.loser1 === '' ||
			this.state.winner2 === '' ||
			this.state.loser2 === '' ||
			this.state.winner1 === this.state.loser1 ||
			this.state.winner2 === this.state.loser2 ||
			this.state.winner1 === this.state.winner2 ||
			this.state.loser1 === this.state.loser2
		) {
			this.notify();
		} else {
			this.props.addTvTMatch(this.formatState(this.state));
			this.props.scoreTvTUpdate(this.setUpdate());
			this.props.opponentTvT(
				this.opponents(this.state.winner1, this.state.loser1, this.state.winner2, this.state.loser2)
			);
			for (let i = 0; i < this.props.tvTplayers.length; i++) {
				if (
					(this.state.winner1 !== this.props.tvTplayers[i].name[0] ||
						this.state.winner1 !== this.props.tvTplayers[i].name[1]) &&
					(this.state.winner2 !== this.props.tvTplayers[i].name[0] ||
						this.state.winner2 !== this.props.tvTplayers[i].name[1])
				) {
					this.props.addPair(this.newPair());
					break;
				}
			}
		}
		//console.log(this.state);
	};

	render() {
		const { players } = this.props;
		const playrNameList = this.playerNames(players);
		//console.log(this.props);
		return (
			<div className="newMatchCard center-align">
				<h3 className="center grey-text text-darken-2 newMatch">New Match</h3>
				<div className="row">
					<Select
						className="col s6"
						options={playrNameList}
						onChange={this.handleWinner1}
						placeholder="Winner 1"
					/>
					<Select
						className="col s6"
						options={playrNameList}
						onChange={this.handleLoser1}
						placeholder="Opponent 1"
					/>
				</div>
				<div className="row">
					<Select
						className="col s6"
						options={playrNameList}
						onChange={this.handleWinner2}
						placeholder="Winner 2"
					/>
					<Select
						className="col s6"
						options={playrNameList}
						onChange={this.handleLoser2}
						placeholder="Opponent 2"
					/>
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
	//console.log(state);
	return {
		totalMatch: state.match.matches.length,
		matches: state.match.matches,
		players: state.player.players,
		tvTplayers: state.tvTplayer.tvTplayers
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTvTMatch: (match) => dispatch(addTvTMatch(match)),
		scoreTvTUpdate: (updatedPlayers) => dispatch(scoreTvTUpdate(updatedPlayers)),
		opponentTvT: (opponents) => dispatch(opponentTvT(opponents)),
		addPair: (pair) => dispatch(addPair(pair))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TvTNewMatch);

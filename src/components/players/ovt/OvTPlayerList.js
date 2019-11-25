import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import OvTSinglePlayer from './OvTSinglePlayer';
import NewPlayer from '../../dashboard/ovo/NewPlayer';

class OvTPlayerList extends Component {
	state = {
		showModal: false
	};

	openModal = () => {
		this.setState({ showModal: true });
	};

	closeModal = () => {
		this.setState({ showModal: false });
	};

	winPercentage = (total, wins) => {
		return total ? (wins * 100 / total).toFixed(2) + '%' : '0.00%';
	};

	render() {
		const { ovTplayers } = this.props;
		const winPercentageList =
			ovTplayers &&
			ovTplayers.map((player) => {
				return {
					player,
					percentage: parseInt(this.winPercentage(player.total, player.wins))
				};
			});
		winPercentageList.sort((a, b) => {
			return b.percentage - a.percentage;
		});

		const sortedPlayers =
			winPercentageList &&
			winPercentageList.map((list) => {
				return list.player;
			});

		return (
			<div className="container collection with-header list">
				<h4 className="center-align collection-header grey-text text-darken-2">Players</h4>
				{sortedPlayers &&
					sortedPlayers.map((player, i) => {
						return (
							<Link to={'/ovtplayer_details/' + i} key={i}>
								<OvTSinglePlayer player={player} />
							</Link>
						);
					})}
				<div className="row center">
					<button className="btn waves-effect waves-light hoverable addPlayer" onClick={this.openModal}>
						Add Player
					</button>
					<NewPlayer showModal={this.state.showModal} closeModal={this.closeModal} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	//console.log(state.player);
	return {
		ovTplayers: state.ovTplayer.ovTplayers
	};
};

export default connect(mapStateToProps)(OvTPlayerList);

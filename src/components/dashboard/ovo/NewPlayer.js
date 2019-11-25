import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addPlayer } from '../../../store/actions/addPlayer';

class NewPlayer extends Component {
	state = {
		id: 0,
		name: '',
		total: 0,
		wins: 0,
		winAgainst: []
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	setId = (totalPlayer) => {
		this.setState({
			id: totalPlayer + 1
		});
	};

	notify = () => toast.warn('Need a name here !');

	handleSubmit = (e) => {
		e.preventDefault();
		this.setId(this.props.totalPlayer);
		if (this.state.name === '') {
			this.notify();
		} else {
			this.props.addPlayer(this.state);
			this.props.closeModal();
		}
		//console.log(this.props);
	};

	render() {
		const { showModal, closeModal } = this.props;
		//console.log(this.props);
		return (
			<Modal isOpen={showModal} ariaHideApp={false} className="modalContainer modal">
				<div className="modal-content">
					<div className="row">
						<div className="col s9">
							<div className="modalTitle">Add New Player</div>
						</div>
						<div className="col s3">
							<button
								onClick={closeModal}
								className="btn-floating waves-effect waves-light hoverable closeButton"
							>
								&times;
							</button>
						</div>
					</div>
					<form onSubmit={this.handleSubmit}>
						<div className="row">
							<input
								type="text"
								id="name"
								placeholder="Name : "
								className="hoverable modalInput"
								onChange={this.handleChange}
							/>
						</div>
						<div className="row center">
							<button className="btn waves-effect waves-light hoverable addButton">Add</button>
						</div>
					</form>
				</div>
			</Modal>
		);
	}
}

const mapStateToProps = (state) => {
	//console.log(state);
	return {
		totalPlayer: state.player.players.length
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addPlayer: (player) => {
			dispatch(addPlayer(player));
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(NewPlayer);

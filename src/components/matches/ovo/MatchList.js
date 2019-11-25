import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SingleMatch from './SingleMatch';

class MatchList extends Component {
	render() {
		const { matches } = this.props;
		return (
			<div className="collection with-header list">
				<h4 className="center-align collection-header grey-text text-darken-2">Matches</h4>
				{matches.length ? (
					matches.map((match, i) => {
						//console.log(match, i);
						return (
							<Link to={'/match_details/' + i} key={i}>
								<SingleMatch match={match} />
							</Link>
						);
					})
				) : (
					<h1>Add a new match</h1>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	//console.log(state);
	return {
		matches: state.match.matches
	};
};

export default connect(mapStateToProps)(MatchList);

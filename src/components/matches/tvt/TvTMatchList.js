import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TvTSingleMatch from './TvTSingleMatch';

class TvTMatchList extends Component {
	render() {
		const { tvTmatches } = this.props;
		return (
			<div className="collection with-header list">
				<h4 className="center-align collection-header grey-text text-darken-2">Matches</h4>
				{tvTmatches &&
					tvTmatches.map((match, i) => {
						//console.log(match, i);
						return (
							<Link to={'/tvtmatch_details/' + i} key={i}>
								<TvTSingleMatch match={match} />
							</Link>
						);
					})}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	//console.log(state);
	return {
		tvTmatches: state.tvTmatch.tvTmatches
	};
};

export default connect(mapStateToProps)(TvTMatchList);

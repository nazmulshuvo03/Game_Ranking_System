import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import OvTSingleMatch from './OvTSingleMatch';

class OvTMatchList extends Component {
	render() {
		const { ovTmatches } = this.props;
		return (
			<div className="collection with-header list">
				<h4 className="center-align collection-header grey-text text-darken-2">Matches</h4>
				{ovTmatches &&
					ovTmatches.map((match, i) => {
						//console.log(match, i);
						return (
							<Link to={'/ovtmatch_details/' + i} key={i}>
								<OvTSingleMatch match={match} />
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
		ovTmatches: state.ovTmatch.ovTmatches
	};
};

export default connect(mapStateToProps)(OvTMatchList);

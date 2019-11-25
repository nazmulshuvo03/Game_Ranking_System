import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import MatchList from './components/matches/ovo/MatchList';
import PlayerList from './components/players/ovo/PlayerList';
import Dashboard from './components/dashboard/ovo/Dashboard';

import TvTDashboard from './components/dashboard/tvt/TvTDashboard';
import TvTPlayerList from './components/players/tvt/TvTPlayerList';
import TvTMatchList from './components/matches/tvt/TvTMatchList';

import OvTDashboard from './components/dashboard/ovt/OvTDashboard';
import OvTPlayerList from './components/players/ovt/OvTPlayerList';
import OvTMatchList from './components/matches/ovt/OvTMatchList';

const Home = () => {
	return (
		<Tabs>
			<TabList>
				<Tab>
					<div className="tabText">One VS One Match Details</div>
				</Tab>
				<Tab>
					<div className="tabText">One VS Two Match Details</div>
				</Tab>
				<Tab>
					<div className="tabText">Two VS Two Match Details</div>
				</Tab>
			</TabList>

			<TabPanel>
				<div className="row">
					<div className="col l4 m6 s12">
						<PlayerList />
					</div>
					<div className="col l4 m6 s12">
						<Dashboard />
					</div>
					<div className="col l4 m6 s12">
						<MatchList />
					</div>
				</div>
			</TabPanel>
			<TabPanel>
				<div className="row">
					<div className="col l4 m6 s12">
						<OvTPlayerList />
					</div>
					<div className="col l4 m6 s12">
						<OvTDashboard />
					</div>
					<div className="col l4 m6 s12">
						<OvTMatchList />
					</div>
				</div>
			</TabPanel>
			<TabPanel>
				<div className="row">
					<div className="col l4 m6 s12">
						<TvTPlayerList />
					</div>
					<div className="col l4 m6 s12">
						<TvTDashboard />
					</div>
					<div className="col l4 m6 s12">
						<TvTMatchList />
					</div>
				</div>
			</TabPanel>
		</Tabs>
	);
};

export default Home;

import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
//import header
import Header from '../Header';

import history from '../history';
const App = () => {
	return (
		<div>
			<Router history={history}>
				<Header />

				<div>
					<Route path="/" exact component={StreamList} />
					<Route path="/stream/create" exact component={StreamCreate} />
					<Route path="/stream/show/:id" exact component={StreamShow} />
					<Route path="/stream/edit/:id" exact component={StreamEdit} />
					<Route path="/stream/delete/:id" exact component={StreamDelete} />
				</div>
			</Router>
		</div>
	);
};

export default App;

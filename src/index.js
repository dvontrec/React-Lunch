import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import './index.css';

import Home from './components/Home';
import Option from './components/Option';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
	<Provider store={ createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<div>
					<Switch>
						<Route path="/lunch" component={ Option } />
						<Route path="/" component={ Home } />
					</Switch>
				</div>
			</BrowserRouter>
	</Provider>
	, document.querySelector('.container'));
registerServiceWorker();
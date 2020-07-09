import React from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';

import routes from './routes';
import UserProvider from './components/UserProvider';

function App() {
	return (
		<Router>
			<UserProvider>
				<div id="wrapper">
					{showRoute(routes)}		
				</div>
			</UserProvider>
		</Router>
	);
}

function showRoute(routes){
	let xhtml = null;
	
	if(routes.length > 0 ){
		xhtml = routes.map((route, index)=> {
			return (
				<Route key={index} exact={route.exact} path={route.path} component={route.main}/>
			);
		});
	}

	return <Switch>{xhtml}</Switch>;
}

export default App;
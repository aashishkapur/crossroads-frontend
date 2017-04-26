import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
// import { createStore } from 'redux'
// import xRoadReducer from '../reducers/'

// let store = createStore(xRoadReducer)

// const store
ReactDOM.render(
    <MuiThemeProvider>
	        <App />
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);
		// <Provider >

		// </Provider>

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();


ReactDOM.render(
    <MuiThemeProvider>
		<Provider>
	        <App />
		</Provider>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);

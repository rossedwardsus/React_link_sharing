import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import Store from './store'
import {BrowserRouter as Router } from 'react-router-dom'
import history from "./history";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const darkTheme = createMuiTheme({
  //backgroundColor: "#333333",
  //textColor: "#000000",
  //primary: "#77ccdd"
  overrides: {
    MuiButton: {
      root: {         
      	fontSize: 15,         
      	color: 'blue',   
      	backgroundColor: 'grey',
      	size: "small"

      } 
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
  	<MuiThemeProvider theme={darkTheme}>
    <Router>
	    <Provider store={Store}>
	      <App />
	    </Provider>
    </Router>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

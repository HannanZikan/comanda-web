import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

import firebase from "firebase/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCEAToAhCpQWMgxwAmDtLgDeQE4EhIgt2Y",
	authDomain: "comanda-inteligente.firebaseapp.com",
	databaseURL: "https://comanda-inteligente-default-rtdb.firebaseio.com",
	projectId: "comanda-inteligente",
	storageBucket: "comanda-inteligente.appspot.com",
	messagingSenderId: "170777450390",
	appId: "1:170777450390:web:b16597525a5cacd86bafb7",
	measurementId: "G-6FNFPJ83D6"
};
if (!firebase.apps[0]) {
	firebase.initializeApp(firebaseConfig);
}



ReactDOM.render(
	<React.StrictMode>
		<App />

	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

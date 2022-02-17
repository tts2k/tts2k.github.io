import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/TerminusTTF.ttf'
import './fonts/siji.ttf'
import { TerminalContextProvider } from '@tts2k/react-terminal/'

ReactDOM.render(
    <TerminalContextProvider>
      <App />
    </TerminalContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import './index.css';
import logo from '../../logo.svg';

export default class Config extends React.Component {
    render() {
      return (<div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Hola Gente
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                </header>
            </div>);
    }
}
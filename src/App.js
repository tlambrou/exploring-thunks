import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from "./reducers"
import RandomNumber from './components/RandomNumber'

const store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Hello World!</h1>
          </header>
          <h3>
            <RandomNumber/>
          </h3>
        </div>
      </Provider>
    )
  }
}

export default App;

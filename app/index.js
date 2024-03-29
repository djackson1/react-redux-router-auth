import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, browserHistory, Switch, Link } from 'react-router-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import todoApp from './reducers'

import App from './app'
import Login from './login'

let store = createStore(todoApp, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions'

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

console.log("X?")

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe();






ReactDOM.render(<Provider store={store}>
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
</Provider>, document.getElementById('app'));

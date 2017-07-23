import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class App extends Component {
  render () {
    return (
        <div>
          <div>App</div>
          <Link to="/login">Login</Link>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
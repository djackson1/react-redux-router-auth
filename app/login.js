import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Login extends Component {
  render () {
    return (
        <div>
          <h1>Login</h1>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
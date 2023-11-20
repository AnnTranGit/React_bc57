import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
        <form>
        <h3>Login</h3>
        <div classname="mb-3">
            <label htmlfor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div classclassName="mb-3">
            <label htmlfor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <div classname="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlfor="rememberMe">Remember Me</label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        </form>
 )
  }
}

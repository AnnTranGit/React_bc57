import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class Admin extends Component {
  render() {
    if (!localStorage.getItem('accessToken_admin')) {
       return <Navigate to="user"/> 
    }
    return (
      <div>Admin</div>
    )
  }
}

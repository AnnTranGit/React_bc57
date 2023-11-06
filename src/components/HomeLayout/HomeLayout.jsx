import React, { Component } from 'react'
import Header from './Header'
import NavigationComponent from './NavigationComponent'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        
        <Header/>
        <div className='d-flex'>
            <NavigationComponent/>
            <ContentComponent/>
        </div>
        <FooterComponent/>


      </div>
    )
  }
}

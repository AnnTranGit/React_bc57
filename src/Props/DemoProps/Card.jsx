import React, { Component } from 'react'

export default class Card extends Component {
  render() {

    // this.props: la thuoc tinh co san cua react class component tuong tu nhuw state. Props se chua du lieu tai noi su dung component truyen va

    let {name,age,image} = this.props;


    return (
      <div className='card'>
        <img src= {image} alt="..." />
        <div className='card-body'>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>


      </div>
    )
  }
}

import React, { Component } from 'react'

export default class ChangeFontSize extends Component {

    //state la thuoc tinh co san cua class component, dung de quan ly gia tri thay doi cua component

    state = {
        fSize:16
    }

  render() {
    return (
      <div className='container'>
        <p style={{fontSize:this.state.fSize}}>Lorem ipsum dolor sit amet.</p>
        <button className='btn btn-primary' onClick={() =>{
            //this.setState la 1 ham co san cua react class component nhan vao state voi gia tri mo va goi ham render lai giao dien 

            let newState ={
                fSize:this.state.fSize + 10
            }

            this.setState(newState)



        }}>+</button>


      </div>
    )
  }
}

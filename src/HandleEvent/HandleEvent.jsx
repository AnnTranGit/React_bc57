import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (e) =>{
        console.log('clicked');

    }

    sayHello = (name) =>{
        alert(name)
    }
  render() {
    return (
        <div>
        <button className='btn btn-success' onClick={this.handleClick}>Click me</button>

        <button className='btn btn-success' onClick={(e)=>{
        this.sayHello('Ang')    
        ;}}>click me</button>


        <input className='w-25 form-control' onInput={(e) =>{

            let value = e.target.value;
            e.target.style.color ='red'
            console.log(value);
        }}/>







        </div>
    )
  }
}

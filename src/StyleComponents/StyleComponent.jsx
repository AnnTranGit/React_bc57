import React, { Component } from 'react'

//import css dang module
import style from "./StyleComponent.module.scss"

export default class StyleComponent extends Component {
  render() {

    
    let classNameCss ='text-green';

    let obStyle ={
        fontSize :'20px',
        color:'white',
        backgroundColor :'red',
        padding:'15px'
    }

    return (
        <div className="container">
            <p className = {`bg-danger ${style[classNameCss]}`}> Lorem, ipsum dolor.</p>


            <div style={{
                fontSize :'20px',
                color:'white',
                backgroundColor :'red',
                padding:'15px'

            }}>

                abc
            </div>

            <div style={obStyle}> abc</div>

        </div>
    )
  }
}

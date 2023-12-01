import React, { Component } from 'react'
import {connect} from 'react-redux'

class ChangeNumberRedux extends Component {
  render() {

    let {number,dispatch} = this.props;

    console.log(this.props);

    return (
      <div className='container'>
        <h3>Number: {number}</h3>
        <button className='btn btn-success' onClick={ () => {
            //tao ra object action chua du lieu gui di

            const action = {

                type :'CHANGE_NUMBER_ACTION', //Type la thuoc tinh bat buoc de biet duoc action nao thuc thi
                payload: number + 1
            
            }

            //dung ham dispatch de dua du lieu len redux
            dispatch(action)

        }}>+</button>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
    return {//props cua component
        number : state.number
    }
}

//Ket noi redux
const ComponentWithRedux = connect(mapStateToProps) (ChangeNumberRedux)
export default ComponentWithRedux
//HOC: Higher order component

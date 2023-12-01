import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFontSizeAction } from '../redux/reducer/fontSizeReducer';

 class ChangeFontSize extends Component {
  render() {

    let {fSizeState,dispatch} = this.props;

    console.log(this.props);
    return (
      <div className='container'>
        <p style={{fontSize: fSizeState.fSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, culpa.</p>
        
        <button className='btn btn-primary mx-2' onClick={() => {
            //tao ra action duoc export tu file rxslice
            const action = changeFontSizeAction(1)

            // dispatch action len reducer
            dispatch(action)
        }}>+</button>


        <button className='btn btn-primary mx-2' onClick={() => {
             //tao ra action duoc export tu file rxslice
             const action = changeFontSizeAction(-1)

             // dispatch action len reducer
             dispatch(action)
        }}>-</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    fSizeState : state.fSizeState


})
//Bo mapDispatchToProps


//                        xoa mapDispatchToProps
export default connect(mapStateToProps)(ChangeFontSize)
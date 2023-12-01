//rxslice

import { createSlice } from '@reduxjs/toolkit'

const initialState = { imgState :'./img/CarBasic/products/red-car.jpg'}

const imgReducer = createSlice({
  name: 'second', //ten cua reducer (gop phan tao thanh type action)
  initialState,
  reducers: {
    changeCarColorAction: (state,action) => {
        state.imgState = `./img/CarBasic/products/${action.payload}-car.jpg`
    }

  }
});

export const {changeCarColorAction} = imgReducer.actions

export default imgReducer.reducer





/*
(state = './img/CarBasic/products/black-car.jpg',action) => {
    console.log(action);
    if (action.type === 'CHANGE_CAR_COLOR_ACTION') {
        state = `./img/CarBasic/products/${action.payload}-car.jpg`
    }
    return state;


}

*/


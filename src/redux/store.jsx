import {configureStore} from "@reduxjs/toolkit"
import imgReducer from "./reducer/imgReducer";
import fontSizeReducer from "./reducer/fontSizeReducer";
import gioHangReducer from "./reducer/gioHangReducer";


export const store = configureStore ({
    reducer : {
        //Chua toan bo state cua ung dung
        number: (state = 10, action) => {

            switch(action.type){
                case "CHANGE_NUMBER_ACTION" :{
                    state = action.payload
                    return state;
                };
                default :{
                    return state;
                }
            }
        
        },

        img: imgReducer,
        fSizeState: fontSizeReducer,
        gioHangState : gioHangReducer,

    }
});
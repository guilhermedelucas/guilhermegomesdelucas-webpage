import axios from 'axios';

export function changeRColor(value){
    return {
        type: "CHANGE_R_COLOR",
        payload: value
    }
}

export function changeGColor(value){
    return {
        type: "CHANGE_G_COLOR",
        payload: value
    }
}


export function changeBColor(value){
    return {
        type: "CHANGE_B_COLOR",
        payload: value
    }
}

export default function reducer(
    state={
        colorR: 52,
        colorG: 52,
        colorB: 52,
    }, action) {

    switch (action.type) {
        case "CHANGE_R_COLOR": {
            return {
                ...state,
                colorR: action.payload

            }
        }
        case "CHANGE_G_COLOR": {
            return {
                ...state,
                colorG: action.payload

            }
        }
        case "CHANGE_B_COLOR": {
            return {
                ...state,
                colorB: action.payload

            }
        }
    }
    return state
}

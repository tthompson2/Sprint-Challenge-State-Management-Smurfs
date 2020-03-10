import { RETRIEVE_SMURF_START, RETRIEVE_SMURF_SUCCESS } from "../actions/index";

const initialState = {
    smurf: [],
    isFetching: false,
    error: ""
}


const SmurfReducer = (state = initialState, action) => {
    
    console.log("wholeReducer", state, action);

    switch (action.type) {
        case 'RETREIVE_SMURF_START':
            return {
                ...state,
                isFetching: true,
                error: " "
            }
        case "RETRIEVE_SMURF_SUCCESS":
            return {
                ...state,
                isFetching: false,
                smurf: [...state.smurf, action.payload]
                // smurf: action.payload
            }
        case "ADD_SMURF": 
             
            return {
                ...state,
                // smurf: [...state.smurf, action.payload]
            }
        case "REMOVE_SMURF":
            return {
                ...state,
                smurf: state.smurf.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
};

export default SmurfReducer;
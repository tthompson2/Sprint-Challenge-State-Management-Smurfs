const initialState = {
    price: 0
}

const SmurfReducer = (state = initialState, action) => {
    console.log("wholeReducer", state, action);

    switch (action.type) {
        case 'REMOVE_SMURF':
            return {
                ...state,

            }
            case "ADD_SMURF":
                // If the feature ID equals the feature ID that was clicked, it will not be added.
                return {
                    ...state,
                }
        default:
            return state;
    }
};

export default SmurfReducer;
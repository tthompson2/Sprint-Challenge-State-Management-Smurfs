import React, { useEffect } from 'react';
import axios from "axios";

const initialState = {
    price: 0,
}

const getInfo = () => {

    useEffect(() => {

        axios
            .get('http://localhost:3333/smurfs/')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })

    })
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
import axios from "axios";
import React, {useState, useEffect} from "react";

// export const ADD_SMURF ="ADD_SMURF";
// export const REMOVE_SMURF = "REMOVE_SMURF"; 
export const RETRIEVE_SMURF_START = "RETRIEVE_SMURF_START";
export const RETRIEVE_SMURF_SUCCESS = "RETRIEVE_SMURF_SUCCESS";
export const RETRIEVE_SMURF_FAILURE = "RETRIEVE_SMURF_FAILURE";


export const RetrieveInformation = () => dispatch => {


       dispatch({type: "RETRIEVE_SMURF_START"});

        axios
            .get('http://localhost:3333/smurfs/')
            .then(response => {
                console.log("response.data", response.data);
                dispatch( {type: RETRIEVE_SMURF_SUCCESS, payload: response.data})
            })
            .catch(error => {
                // console.log(error);
                dispatch( {type: RETRIEVE_SMURF_FAILURE, payload: "error"})
            })    

}

export const addSmurf = feature => {
    return {type: "ADD_SMURF", payload: feature};
}

export const removeSmurf = feature => {
    return { type: "REMOVE_SMURF", payload: feature};
  };
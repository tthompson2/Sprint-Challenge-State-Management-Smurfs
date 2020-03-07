export const addSmurf = feature => {
    return {type: "ADD_SMURF", payload: feature};
}

export const removeSmurf = feature => {
    return { type:"REMOVE_SMURF", payload: feature};
  };
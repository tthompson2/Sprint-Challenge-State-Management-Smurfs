import React, { useState, useReducer, Component } from "react";
import "./App.css";

import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";



const App = () => {

  const [newElement, setNewElement] = useState("");

  const handleChanges = e => {
    setNewElement(e.target.value);
  }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <br/>
      <div>
        <SmurfForm
          newElement={newElement}
          handleChanges={handleChanges} />
      </div>
      <br/>
      {/* <div>
        <SmurfList
          state={state}
          toggleRemover={toggleRemover} />
      </div> */}
    </div>
  );
}

export default App;

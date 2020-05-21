import React, { useState, useReducer, Component } from "react";
import "./App.css";

import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

import { connect } from "react-redux";
import { addSmurf } from "../actions/index";
import { removeSmurf } from "../actions/index";

const App = (props) => {

  const [newElement, setNewElement] = useState("");

  const {addSmurf, removeSmurf, state} = props;

  const handleChanges = e => {
    setNewElement(e.target.value);
  }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <div>
        <SmurfForm
          newElement={newElement}
          addSmurf={addSmurf}
          removeSmurf={removeSmurf} />
      </div>
      <br/>
      <div>
        <SmurfList/>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {state};
}

export default connect(mapStateToProps, {addSmurf, removeSmurf})(App);

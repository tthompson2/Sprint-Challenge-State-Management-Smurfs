import React from 'react';
// import { todoReducer } from '../reducers';

const Smurf = props => {
    
    console.log(props);

    return (
        <div>
        {/* <div onClick={e => props.toggleRemover(props.id)}> */}
         {props.item}
         {props.completed}
         {props.id}
        </div>
    )

}

export default Smurf;
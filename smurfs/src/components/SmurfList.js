import React from 'react';
import Smurf from './Smurf';

// return <Smurf item={element.item} completed={element.completed} id={element.id} toggleRemover={props.toggleRemover} />

const SmurfList = props => {

    console.log(props.state); 

    return (
        <div>
         {props.state.todos.map(element => { 
         return <Smurf item={element.item} completed={element.completed} id={element.id}/>
         })}   
        
        </div>
    )

}

export default SmurfList;
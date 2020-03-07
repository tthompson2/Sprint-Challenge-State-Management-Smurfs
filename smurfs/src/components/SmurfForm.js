import React from 'react';

const SmurfForm = props => {
   
    return (
        <div>
            <form onSubmit={props.addFunction}>
            <input
               type="text"
               name="itemText"
               onChange={props.handleChanges}
            />
            <button type="submit">Submit</button>
            </form>
            <button onClick={props.addClear}>Clear</button>
        </div>
    )
}

export default SmurfForm;
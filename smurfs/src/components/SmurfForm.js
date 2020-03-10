import React, {useState} from 'react';

const SmurfForm = props => {

    const [newElement, setNewElement] = useState([]);
   
    const handleChanges = e => {
        setNewElement(e.target.value);
      }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.addSmurf(newElement, 1, 3)}}>
            <input
               type="text"
               name="name"
               onChange={handleChanges}
            />
            <button type="submit">Submit</button>
            </form>
            <button onClick={props.addClear}>Clear</button>
        </div>
    )
}

export default SmurfForm;
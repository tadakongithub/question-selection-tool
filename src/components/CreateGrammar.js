import React, { useState } from 'react';

const Form = (props) => {

    const [grammar, setGrammar] = useState('');

    const handleChange = (e) => {
        setGrammar(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNewGrammar(grammar);
        setGrammar('');
    }

    return (
            <form className="ui form grid" onSubmit={handleSubmit}>
                <div className="field thirteen wide column">
                    <input value={grammar} type="text" 
                    onChange={handleChange} placeholder="enter grammar point"/>
                </div>

                <div className="three wide column">
                    <button type="submit" className="ui teal button right floated">Add</button>
                </div>
            </form>
    )
}

export default Form;
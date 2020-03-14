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
        <div>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <input value={grammar} type="text" 
                    onChange={handleChange} placeholder="enter grammar point"/>
                </div>
            </form>
        </div>
    )
}

export default Form;
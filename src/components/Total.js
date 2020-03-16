import React, { useState } from 'react';

const Total = (props) => {

    const [total, setTotal] = useState(20);

    const handleChange = (e) => {
        setTotal(parseInt(e.target.value));
    }

    const setHowManyQuestions = (e) => {
        e.preventDefault();
        props.setHowManyQuestions(total);
    }

    return(
        <form onSubmit={setHowManyQuestions} className="ui form grid">
            <div className="field thirteen wide column">
                <select value={total} onChange={handleChange} className="ui fluid dropdown">
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
           
            <div className="three wide column">
                <button type="submit" className="ui teal button right floated">Set</button>
            </div>
        </form>
    )
}

export default Total;
import React, { useState } from 'react';
import Form from './Form';
import EachGrammar from './EachGrammar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './App.css';

const App = () => {

    const [total, setTotal] = useState(0);
    const [grammarArr, setGrammarArr] = useState([]);

    const addNewGrammar = (newGrammar) => {
        setGrammarArr([...grammarArr, newGrammar]);
    }

    const plusOne = () => {
            setTotal(total + 1);
    }

    const minusOne = () => {
            setTotal(total - 1);
    }

    const grammmarList = () => {
        return grammarArr.map(grammar => {
            return (
                <div>
                    <EachGrammar 
                        name={grammar}
                        plusOne={plusOne}
                        minusOne={minusOne}
                    />
                </div>
            );
        });
    }

    const percentage = (total /20) * 100;
    const trailColor = total => {
        if (total === 20){
            return '#1cfc03';
        } else {
            return '#fcbe03';
        }
    }

    return(
        <div className="ui container">

            <Form addNewGrammar={addNewGrammar}/>

            <div>{grammmarList()}</div>

            <div className="bar-container">
                <CircularProgressbar value={percentage} text={total}
                styles={buildStyles({
                    pathColor: trailColor
                })}/>
            </div>

        </div>
    )
}

export default App;
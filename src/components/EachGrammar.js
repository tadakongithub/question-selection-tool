import React, { useState } from 'react';
import { Progress } from 'semantic-ui-react';
import './EachGrammar.css';

const EachGrammar = (props) => {

    const [count, setCount] = useState(0);

    const plusOne = (e) => {
        if(count < 20){
            setCount(count + 1);
            props.plusOne();
        }
    }

    const minusOne = (e) => {
        if(count > 0){
            setCount(count - 1);
            props.minusOne();
        }
    }

    const deleteItem = () => {
        props.deleteItem(props.name, count);
    }

    return(
        <div className="grammar-container">
            
                <div className="title-button">
                    <div>{props.name}</div>
                    <div className="button-container">
                        <i className="big plus square icon green" onClick={plusOne}></i>
                        <i className="big minus square icon orange" onClick={minusOne}></i>
                        <i className="trash alternate icon" onClick={deleteItem}></i>
                    </div>
                </div>
                <div className="bar-percent">
                    <Progress /*percent={(count/20)*100}*/ value={count} total='20' progress='value' color="teal"/>
                </div>
        </div>
    )
}

export default EachGrammar;
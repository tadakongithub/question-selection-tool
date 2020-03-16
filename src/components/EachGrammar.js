import React, { useRef } from 'react';
import { Progress } from 'semantic-ui-react';
import './EachGrammar.css';
import Editable from './Editable';

const EachGrammar = (props) => {

    const inputRef = useRef();

    const plusOne = (e) => {
        if(props.grammar.count < 20){
            props.plusOne(props.index);
        }
    }

    const minusOne = (e) => {
        if(props.grammar.count > 0){
            props.minusOne(props.index);
        }
    }

    const deleteItem = () => {
        props.deleteItem(props.index);
    }

    const handleGrammarEditing = (e) => {
        props.handleGrammarEditing(e.target.value, props.index);
    }


    return(
        <div className="grammar-container">
            
                <div className="title-button">
                    <Editable grammar={props.grammar.grammar} childRef={inputRef}>
                        <input type="text" value={props.grammar.grammar} onChange={handleGrammarEditing} ref={inputRef}/>
                    </Editable>
                    <div className="button-container">
                        <i className="big plus square icon green" onClick={plusOne}></i>
                        <i className="big minus square icon orange" onClick={minusOne}></i>
                        <i className="trash alternate icon" onClick={deleteItem}></i>
                    </div>
                </div>
                <div className="bar-percent">
                    <Progress /*percent={(count/20)*100}*/ value={props.grammar.count} total='20' progress='value' color="teal"/>
                </div>
        </div>
    )
}

export default EachGrammar;
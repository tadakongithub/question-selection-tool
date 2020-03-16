import React, { useState, useEffect } from 'react';
import Form from './Form';
import EachGrammar from './EachGrammar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './App.css';

const App = () => {

    const [total, setTotal] = useState(0);
    const [grammarArr, setGrammarArr] = useState([]);

    const addNewGrammar = (newGrammar) => {
        setGrammarArr([...grammarArr, {grammar: newGrammar, count: 0}]);
    }

    const plusOne = (index) => {
        //change count of the target grammar
        let arr = [...grammarArr];
        arr[index].count ++;
        setGrammarArr(arr);

        //change total of all grammars
        setTotal(total + 1);
    }

    const minusOne = (index) => {
        //change count of the target grammar
        let arr = [...grammarArr];
        arr[index].count --;
        setGrammarArr(arr);

        //change total of all grammars
        setTotal(total - 1);
    }

    const deleteItem = (indexToDelete) => {
        let countToDelete = grammarArr[indexToDelete].count;
        setTotal(total - countToDelete);

        let arr = grammarArr.filter((grammar, index) => index !== indexToDelete);
        setGrammarArr(arr);
    }

    const handleGrammarEditing = (newGrammar, index) => {
        let newArr = [...grammarArr];
        newArr[index].grammar = newGrammar;
        setGrammarArr(newArr);
    }

    const grammmarList = () => {
        return grammarArr.map((grammar, index) => {
            return (
                <div key={index}>
                    <EachGrammar 
                        grammar={grammar}
                        plusOne={plusOne}
                        minusOne={minusOne}
                        deleteItem={deleteItem}
                        index={index}
                        handleGrammarEditing={handleGrammarEditing}
                    />
                </div>
            );
        });
    }

    let percentage = (total /20) * 100;

    let barColor = '';
        if (total === 20){
            barColor = '#016936';
        } else {
            barColor = '#FE9A76';
        }

        useEffect(()=>{
            console.log(grammarArr);
            grammmarList();
        })
    

    return(
        <div className="ui container">

            <Form addNewGrammar={addNewGrammar}/>

            <div>{grammmarList()}</div>

            <div className="bar-container">
                <CircularProgressbar value={percentage} text={total===0?'0':total}
                styles={buildStyles({
                    pathColor: barColor,
                    textColor: '#000'
                })}/>
            </div>

        </div>
    )
}

export default App;
import React, { useState, useRef } from 'react';

export default function SyntaxHooks(){
    /*
    list형태의 state를 변경할 때에는 
    deep copy > list수정 후 state에 반영
    ex)
    const [numbers, setNumbers] = useState(
        {
            first: Math.ceil(Math.random() * 9,
            second: Math.ceil(Math.random() * 9
        }
    ));

    수정 시
    var tempArr = [...numbers]
    tempArr.first = Math.ceil(Math.random() * 9;
    tempArr.second = Math.ceil(Math.random() * 9;
    setNumbers(tempArr);

    syntax [...var] spread operator
    ...은 배열의 각 요소를 
    */
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [inputValue, setInputValue] = useState('');
    const [resultText, setResultText] = useState('');

    const inputAnsw = useRef(null);

    function calcSubmit(e){
        e.preventDefault();
        if (first * second === parseInt(inputValue)) {
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setInputValue('');
            setResultText('정답!');
        }
        else {
            setInputValue('');
            setResultText('틀렸어....다..');
        }
        inputAnsw.current.focus();
    }

    function inputVal(e){
        setInputValue(e.target.value);
    }

    return (
        <>
            <div>{ first } x { second } = ?</div>
            <form onSubmit={ calcSubmit }>
                <input ref={ inputAnsw } type="text" value={ inputValue } onChange={ inputVal } />
                <button type="submit">확인</button>
                <div>{ resultText }</div>
            </form>
        </>
    );
}
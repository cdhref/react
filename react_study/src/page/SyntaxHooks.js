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
            <h3>
                hooks사용
            </h3>
            {/* jsx에서의 주석 */}
            {/* 
            jsx에서 html tag에 for, class 속성을 기입 할 경우 
            javascript의 반복문과 class 예약어와 구분이 어렵기 때문에 다음과 같이 사용한다.
            for -> htmlFor, class -> className

            이외에도 기존 html에서 합성어로 쓰이던 속성명(onclick, onsubmit등)도
            camel case로 표기(onClick, onSubmit등) 해야 한다.
            */}
            <label htmlFor="label-for">{ first } x { second } = ?</label>
            <form onSubmit={ calcSubmit }>
                <input ref={ inputAnsw } type="text" value={ inputValue } onChange={ inputVal } />
                <button type="submit">확인</button>
                <div className="result">{ resultText }</div>
            </form>
        </>
    );
}
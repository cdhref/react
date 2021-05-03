import React, { useState, useRef } from 'react';

export default function WordPlay(){
    const [word, setWord] = useState("시작");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputAnsw = useRef(null);

    function onChangeValue(e){
        setValue(e.target.value);
    }
    function onSubmitForm(e){
        e.preventDefault();
        if(value[0] === word[word.length-1]){
            setResult('OK');
            setWord(value);
            setValue('');
            inputAnsw.current.focus();
        }
        else{
            setResult('Nope');
            setValue('');
            inputAnsw.current.focus();
        }
    }
    
    return(
        <> 
        <form onSubmit={ onSubmitForm }>
            <label htmlFor="wordInput">{ word }</label>
            <div className="text-area">
                <input ref={inputAnsw} type="text" value={value} onChange={ onChangeValue } />
                <input type="submit" value="입력" />
            </div>
            <div><span>{result}</span></div>
        </form>
        </>
    )
}

import React, { useState, useRef, useEffect, useCallback, memo, useMemo } from 'react';

function SyntaxHooks(){
    /*
    *********** use.... 함수는 조건문 안에 넣으면 안됨     *************
    *********** use.... 함수 내부에서 use...함수 실행 금지 *************

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
    // 아래 두 변수는 re-rendering돼도 getNum의 값을 기억 함
    let letFirst = useMemo(() => getNum(), []);
    let letSocond = useMemo(() => getNum(), []);

    const [first, setFirst] = useState(letFirst);
    const [second, setSecond] = useState(letSocond);
    const [inputValue, setInputValue] = useState('');
    const [resultText, setResultText] = useState('');
    const inputAnsw = useRef(null);

    /*
    MEMO: Hooks의 lifecycle(SyntaxHooks 기준)

    1. create
    useMemo > render > useEffect

    2. re-rendering
    useState(), useReducer(), useContext() check > useCallback() ... 바뀐 내용 있으면 아래 실행
    render > useEffect retun() > useEffect

    3. destroy
    useEffect return(), useLayoutEffect()
    */
    useEffect(() => {
        console.log('useEffect');
        return () => {
        console.log('useEffect > return');

        }
    }, []);
    /*[] 가 비어있을 경우 최초 1회만 실행되고 re-rendering시 호출 안됨*/

    /* re-rendering에만 반응하는 useEffect 정의
    const mounted = useRef(false);
    useEffect(() => {
        if(!mounted.current){
            mounted.current = true;
        }
        else{
            // code
        }
    });
    */
    const calcSubmit = useCallback((e) => {
        e.preventDefault();
        if (first * second === parseInt(inputValue)) {
            setFirst(getNum());
            setSecond(getNum());
            setInputValue('');
            setResultText('정답!');
        }
        else {
            setInputValue('');
            setResultText('틀렸어....다..');
        }
        inputAnsw.current.focus();
    }, [inputVal]);

    function getNum(){
        return Math.ceil(Math.random() * 9);
    }

    const inputVal = useCallback((e) => {
        setInputValue(e.target.value);
    },[]);

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

export default memo(SyntaxHooks);
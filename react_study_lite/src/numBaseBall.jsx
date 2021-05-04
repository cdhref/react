import React, { useState, useRef, memo } from 'react';
import Try from './module/try';

function getBaseballExample(){
    var arr = [];
    while(arr.length < 4){
        var random = Math.ceil(Math.random() * 9);
        if(arr.findIndex(e => e == random) == -1){
            arr.push(random);
        }
    }
    return arr.join("");
}

function checkInputNum(strNum){
    var text = strNum;
    for(var i = 0; i < 4; i++){
        var count = 0;
        var searchChar = strNum[i];
        var pos = i;
        console.log('searchChar:' + searchChar);
        console.log('pos:' + pos);
        while (pos !== -1) {
            count++;
            pos = text.indexOf(searchChar, pos + 1);
        }
        if(count > 1){
            return false;
        }
    }
    return true;
}

function NumBaseBall(){
    const [num, setNum] = useState(getBaseballExample());
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const [tries, setTries] = useState([]);
    const inputAnsw = useRef(null);

    
    function onChangeValue(e){
        setValue(e.target.value);
    }
    function onSubmitForm(e){
        e.preventDefault();
        if(isNaN(Number(value)) || value.length != 4){
            alert('4자리 정수를 입력 해 주세요.');
            return;
        }
        else{
            if(!checkInputNum(value)){
                alert('4자리 정수에 중복되는 수가 존재합니다. 서로 다른 4자리의 숫자를 입력하세요.');
                return;
            }
            if(value === num){
                setResult('홈런!');
                setTries([]);
                setNum(getBaseballExample());
            }
            else if(tries.length >= 9){
                setBallCount();
                setResult('실패! 게임이 종료 되었습니다. 정답은 ' + num + ' 입니다.');
                setNum(getBaseballExample());
                setTries([]);
            }
            else if(tries.length < 9){
                setBallCount();
                if(tries.length === 0){
                    setResult('');
                }
            }
            setValue('');
        }
    }
    
    function setBallCount(){
        let strike = 0;
        let ball = 0;
        let out = 0;
        for(let i = 0; i < 4; i++){
            if(value[i] === num[i]){
                strike++;
            }
            else if(num.indexOf(value[i]) > -1){
                ball++;
            }
            else{
                out++;
            }
        }
        var tempArr = [...tries];
        tempArr.push(
            {
                input: value,
                val: 'strike: '+strike+', ball: '+ball+', out: '+out+')'
            }
        );
        setTries(tempArr);
    }
    return(
        <> 
        <form onSubmit={ onSubmitForm }>
            <h3>중복되지 않는 숫자 4자리를 입력하세요.</h3>
            <div className="text-area">
                <div>
                    <span>{result}</span>
                </div>
                <input ref={inputAnsw} type="text" value={value} onChange={ onChangeValue } />
                <input type="submit" value="입력" />
            </div>
            <div>
                {
                tries.map((v, i) => {
                    return (
                        <>
                        {
                        /*
                            key 사용 시 주의점

                            key값에 index를 사용 할 경우 추후 state가 변경되어 rendering이 필요 한 경우
                            배열의 출력 순번이 변경 되거나 하면 key가 표시 순번에 맞게 재 할당 되므로
                            key값을 통해 변경사항을 파악하는 react매커니즘에 맞지 않아 성능 문제가 발생 함.
                        */
                        }
                        <Try key={i} value={ v } index={ i + 1 } />
                        </>
                    );
                })
                }
            </div>
        </form>
        </>
    )
}

export default memo(
    NumBaseBall   
)
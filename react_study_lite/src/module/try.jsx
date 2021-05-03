import React, { useState, useRef, memo } from 'react';


/* 
hooks에서 state가 변했을때만 랜더링 되도록 하려면
memo 함수가 리턴한 hooks함수를 export하거나 다음과 같이 사용

function Try(props){

}
export default React.memo(Try, (props, nextProps)=> {
    if(props.value === nextProps.value) {
        return true
    }
})
*/
export default memo(
    function Try(props){
        // props에서 값을 꺼내쓰는 모듈의 경우 다른 모듈의 자식으로써 사용된다
        // 사용 할 때에는 parent module에서 <Try keys={} value={} index={} /> 형태로 사용된다.
        return(
            <div>
                <label htmlFor="labelTry">
                    {props.index}번째 시도. 입력 값: {props.value.input}, 결과: {props.value.val}
                </label>
            </div>
        )
    }
)

/*
component의 경우 예제

// Compnent 대신 PureCompnent를 상속하도록 변경
class Try extends PureCompnent{}

    or

// shouldComponentUpdate 구현
class Try extends Compnent{
    shouldComponentUpdate(nextProps, nextState, nextContext){
        if(this.state.value !== nextState.value){
            return true;
        }
        return false;
    }
}

*/

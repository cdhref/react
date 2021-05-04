import React, { Component } from 'react';


class SyntaxCompnent extends Component {
    /*
    생성자 대신 다음과 같은 형태로 사용가능
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        inputValue: '',
        resultText: ''
    };

    배열에 이전 요소를 추가하거나 할 때
    this.setState((prevState) => {
        objArray: [...prevState.objArray, {}]
    })
    */

    // <input ref={(c) => { this.inputAnsw = c }} type="text" value={this.state.inputValue} onChange={this.inputVal} />
    // ref={(c) => { this.inputAnsw = c }}에서 input태그가 대입 됨
    inputAnsw;
    constructor(props) {
        super(props);
        this.state = {
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            inputValue: '',
            resultText: ''
        };
    }

    /*
    MEMO: component의 lifecycle
    1. create
    create > constructor > render > componentDidMount

    2. re-rendering
    shouldComponentUpdate() == true > render > componentDidUpdate

    3. destroy
    componentWillUnmount > destroy

    */
    //componentDidMount(){/*component의 첫 랜더링 시 호출*/}
    
    /*shouldComponentUpdate(nextProps, nextState, nextContext){
        //rerendering 되기 전 호출
        //return true; //랜더링 됨
        //return false; //랜더링 안됨
    }*/
    //componentDidUpdate(){/*state변경 등으로 인해 rerendering되면 호출*/}
    //componentWillUnmount(){/*컴포넌트가 소멸 될 때 호출 됨*/}

    //function 정의
    calcSubmit = (e) => {
        e.preventDefault();
        if (this.state.first * this.state.second === parseInt(this.state.inputValue)) {
            this.setState({
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                inputValue: "",
                resultText: "정답!"
            });
        }
        else {
            this.setState({
                inputValue: "",
                resultText: "틀렸어.."
            });
        }
        this.inputAnsw.focus();
    }

    inputVal = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    initInputAnsw = (c) => {
        this.inputAnsw = c;
    }

    // state가 바뀔 때 마다 실행 됨
    render() {
        return (
            <>
                <h3>
                    compnent를 사용한 개발. 신규 개발에서는 hooks사용 권장
                </h3>
                {/* jsx에서의 주석 */}
                {/* 
                jsx에서 html tag에 for, class 속성을 기입 할 경우 
                javascript의 반복문과 class 예약어와 구분이 어렵기 때문에 다음과 같이 사용한다.
                for -> htmlFor, class -> className

                이외에도 기존 html에서 합성어로 쓰이던 속성명(onclick, onsubmit등)도
                camel case로 표기(onClick, onSubmit등) 해야 한다.
                */}
                <div>{ this.state.first } x { this.state.second } = ?</div>
                <form onSubmit={ this.calcSubmit }>
                    <input ref={ this.initInputAnsw } type="text" value={ this.state.inputValue } onChange={ this.inputVal } />
                    <button type="submit">확인</button>
                    <div>{this.state.resultText}</div>
                </form>
            </>
        );
    }
}

export default SyntaxCompnent;
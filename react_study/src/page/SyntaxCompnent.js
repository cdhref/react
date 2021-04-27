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
                resultText: "틀렸어....다.."
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
                <div>{this.state.first} x {this.state.second} = ?</div>
                <form onSubmit={this.calcSubmit}>
                    <input ref={ this.initInputAnsw } type="text" value={this.state.inputValue} onChange={this.inputVal} />
                    <button type="submit">확인</button>
                    <div>{this.state.resultText}</div>
                </form>

            </>
        );
    }
}

export default SyntaxCompnent;
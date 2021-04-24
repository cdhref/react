import ReactDOM from 'react-dom'
import React, { Component } from 'react';


class Syntax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            inputValue: '',
            resultText: ''
        };
    }

    calc = (e) => {
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
    }

    inputVal = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.first} x {this.state.second} = ?</div>
                <form onSubmit={this.calc}>
                    <input type="text" value={this.state.inputValue} onChange={this.inputVal} />
                    <button type="submit">확인</button>
                    <div>{this.state.resultText}</div>
                </form>

            </div>
        );
    }
}

ReactDOM.render(
    <Syntax />,
    document.getElementById('root')
);

export default Syntax;
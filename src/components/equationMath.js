import React, { Component } from 'react';

class EquationMath extends Component {
    state = { 
        answer:'?',
        problem:'',
        resetDisplay: false,
        correctAnswers: 0
     }

    componentDidMount(){
         this.randomMathProblem();
     }

    calcClockTime(){
        this.setState({answer: "What is the Answer?"})
    }

    randomMathProblem(){
        let numberOne = (Math.floor(Math.random() * 10));
        let numberTwo = (Math.floor(Math.random() * 10));
        const problem=
        <div className="col-12 cell">
            <div className="col-12 cell">{ numberOne } + { numberTwo} = <input className="answerBox" type="text" size="2" id="answerOne" autoFocus autoComplete="off"/> + <input className="answerBox" type="text" size="2" id="answerTwo" autoFocus autoComplete="off"/></div>
            <div className="col-12 cell"><button type="button" onClick={() => this.checkAnswer(numberOne, numberTwo, document.getElementById('answerOne').value, document.getElementById('answerTwo').value)}>Check Answer</button></div>
        </div> 
        console.log("problem" + problem);
        this.setState({problem});
    }

    checkAnswer(numberOne, numberTwo, answerOne, answerTwo){
        let computerAnswer = numberOne + numberTwo;
        let userAnswer = parseInt(answerOne) + parseInt(answerTwo);
        console.log(answerOne);
        console.log(answerTwo);
        console.log(userAnswer);
        if (userAnswer == computerAnswer){
            this.setState({answer: "Correct"})
            let numCorrectAnswer = this.state.correctAnswers + 1;
            this.setState({correctAnswers: numCorrectAnswer})
            this.setState({resetDisplay:true});
        }
        else if (userAnswer != computerAnswer){
            this.setState({answer: "Wrong"})
            this.setState({correctAnswers: 0})
        }
    }

    resetProblem(){
        this.setState({resetDisplay:false});
        this.setState({answer: '?'});
        {document.getElementById("answerOne").value = ''}
        {document.getElementById("answerTwo").value = ''}
        this.randomMathProblem();
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-12 cell">
                    <h1>Equation</h1>
                </div>
                {this.state.problem}           
                <div className="col-12 cell">
                    <h2> Your answer is {this.state.answer}</h2>
                </div>
                <div className="col-12 cell">
                    {this.state.correctAnswers > 0 ? <div> You have {this.state.correctAnswers} correct answers in a row! </div> : null}
                </div>
                <div className="col-12 cell">
                    {this.state.resetDisplay ? <button type="button" onClick={(() => this.resetProblem())} >Next Problem</button> : null}
                </div>
            </div>
         );
    }
}
 
export default EquationMath;
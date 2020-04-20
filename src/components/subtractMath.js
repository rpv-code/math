import React, { Component } from 'react';

class SubtractMath extends Component {
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
        let numberBig = 0;
        let numberSmall = 0;
        let numberOne = (Math.floor(Math.random() * 10));
        let numberTwo = (Math.floor(Math.random() * 10));
        if (numberOne >= numberTwo){
            numberBig = numberOne;
            numberSmall = numberTwo; 
        }
        else if (numberOne < numberTwo){
            numberBig = numberTwo;
            numberSmall = numberOne;
        }
        const problem=
        <div className="col-12 cell">
            <div className="col-12 cell">{ numberBig } - { numberSmall } = <input className="answerBox" type="text" size="4" id="answer" autoFocus autoComplete="off"/></div>
            <div className="col-12 cell"><button type="button" onClick={() => this.checkAnswer(numberBig, numberSmall, document.getElementById('answer').value)}>Check Answer</button></div>
        </div> 
        console.log("problem" + problem);
        this.setState({problem});
    }

    checkAnswer(numberBig, numberSmall, answer){
        let computerAnswer = numberBig - numberSmall;
        if (answer == computerAnswer){
            this.setState({answer: "Correct"})
            let numCorrectAnswer = this.state.correctAnswers + 1;
            this.setState({correctAnswers: numCorrectAnswer})
            this.setState({resetDisplay:true});
        }
        else if (answer != computerAnswer){
            this.setState({answer: "Wrong"})
            this.setState({correctAnswers: 0})
        }
    }

    resetProblem(){
        this.setState({resetDisplay:false});
        this.setState({answer: '?'});
        {document.getElementById("answer").value = ''}
        this.randomMathProblem();
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-12 cell">
                    <h1>Subtraction</h1>
                </div>
                {this.state.problem}           
                <div className="col-12 cell">
                    <h1> Your answer is {this.state.answer}</h1>
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
 
export default SubtractMath;
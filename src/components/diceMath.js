import React, { Component } from 'react';
import DiceOne from '../assets/dice_one.PNG';
import DiceTwo from '../assets/dice_two.PNG';
import DiceThree from '../assets/dice_three.PNG';
import DiceFour from '../assets/dice_four.PNG';
import DiceFive from '../assets/dice_five.PNG';
import DiceSix from '../assets/dice_six.PNG';

class DiceMath extends Component {
    state = { 
        answer:'?',
        problem:'',
        resetDisplay: false,
        correctAnswers: 0, 
        numDice: 2
     }

    componentDidMount(){
         this.randomMathProblem();
     }

    calcClockTime(){
        this.setState({answer: "What is the Answer?"})
    }

    randomMathProblem(){
        let numberRolled = [];     
        let diceImage = [];
        for (let i=0; i<this.state.numDice; i++){
            numberRolled.push((Math.floor(Math.random() * 6)));
            if (numberRolled[i] === 1){
                diceImage.push(DiceOne) ;
            }
            else if (numberRolled[i] === 2){
                diceImage.push(DiceTwo);
            }
            else if (numberRolled[i] === 3){
                diceImage.push(DiceThree);
            }
            else if (numberRolled[i] === 4){
                diceImage.push(DiceFour);
            }
            else if (numberRolled[i] === 5){
                diceImage.push(DiceFive);
            }
            else if (numberRolled[i] === 6){
                diceImage.push(DiceSix);
            }
        }

        console.log(numberRolled[0]);
        const problem=
        <div className="col-12">
            <div className="row">
            <div className="col-6 cell">{this.imgTags(diceImage)}</div><div className="col-6 cell"><div>How many?</div><input className="answerBox" type="text" size="4" id="answer" autoFocus autoComplete="off"/></div>
            </div>
            <div className="col-12 cell"><button type="button" onClick={() => this.checkAnswer(numberRolled, document.getElementById('answer').value)}>Check Answer</button></div>
        </div> 
        console.log("problem" + problem);
        this.setState({problem});
    }

    imgTags(diceImage){
        let imgText = '';
        for (let i=0; i<this.state.numDice; i++){
            let imgSRC = diceImage[i];
            imgText = imgText + "<img src=" + imgSRC + " alt='dice' />";
        }
        console.log(imgText);
        return (
            <div className="col-12 cell">
                {imgText}
            </div>
            
        )
    }

    checkAnswer(numberRolled, answer){
        let computerAnswer = numberRolled[0];
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
                    <h1>Dice</h1>
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
 
export default DiceMath;
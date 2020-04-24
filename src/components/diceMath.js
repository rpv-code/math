import React, { Component } from 'react';
import Image from './Image';

class DiceMath extends Component {
    state = { 
        answer:'?',
        problem:'',
        resetDisplay: false,
        correctAnswers: 0, 
        numDice: 2,
        diceImage: {
            diceOne: 'dice_one.PNG',
            diceTwo: 'dice_two.PNG',
            diceThree: 'dice_three.PNG',
            diceFour: 'dice_four.PNG',
            diceFive: 'dice_five.PNG',
            diceSix: 'dice_six.PNG'
        }
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
                diceImage.push(this.state.diceImage.diceOne) ;
            }
            else if (numberRolled[i] === 2){
                diceImage.push(this.state.diceImage.diceTwo);
            }
            else if (numberRolled[i] === 3){
                diceImage.push(this.state.diceImage.diceThree);
            }
            else if (numberRolled[i] === 4){
                diceImage.push(this.state.diceImage.diceFour);
            }
            else if (numberRolled[i] === 5){
                diceImage.push(this.state.diceImage.diceFive);
            }
            else if (numberRolled[i] === 6){
                diceImage.push(this.state.diceImage.diceSix);
            }
            console.log("dice image: " + diceImage[i]);
        }
        let test = 'dice_one.PNG';

        const problem=
        <div className="col-12">
            <div className="row">
            <div className="col-6 cell"><Image source={test} key={test} /></div><div className="col-6 cell"><div>How many?</div><input className="answerBox" type="text" size="4" id="answer" autoFocus autoComplete="off"/></div>
            </div>
            <div className="col-12 cell"><button type="button" onClick={() => this.checkAnswer(numberRolled, document.getElementById('answer').value)}>Check Answer</button></div>
        </div> 
        this.setState({problem});
    }

    imgTags(diceImage){
        let imgText = '';
        for (let i=0; i<this.state.numDice; i++){
            imgText = imgText + <Image source={diceImage[i]} key={diceImage[i] + i} />;
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
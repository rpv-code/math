import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/addMath';
import AddMath from './components/addMath';
import SubtractMath from './components/subtractMath';
import EquationMath from './components/equationMath';
import DiceMath from './components/diceMath';
import ButtonBox from './components/buttonBox';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = { 
    displayAddition: false,
    displaySubtraction: false,
    displayEquation: false,
    displayDice: false
   }

   handleClick(clickType){
    console.log(clickType);
    if (clickType === "displayAddition"){
      this.setState({ displayAddition: true});
      this.setState({ displaySubtraction: false});
      this.setState({ displayEquation: false});
      this.setState({displayDice: false});
    }
    else if (clickType === "displaySubtraction"){
      this.setState({ displaySubtraction: true});
      this.setState({ displayAddition: false});
      this.setState({ displayEquation: false});
      this.setState({displayDice: false});
    }
    else if (clickType === "displayEquation"){
      this.setState({ displayEquation: true});
      this.setState({ displaySubtraction: false});
      this.setState({ displayAddition: false});
      this.setState({displayDice: false});
    }
    else if (clickType === "displayDice"){
      this.setState({ displayEquation: false});
      this.setState({ displaySubtraction: false});
      this.setState({ displayAddition: false});
      this.setState({displayDice: true});
    }
  }

  render() { 
    return ( 
      <div className="App container-fluid">
      <div className="header row">
        <div className="col-12">
          <h1>Hello WORLD!</h1>          
            <div className="row">
              <ButtonBox name="Addition" onClick={() => this.handleClick("displayAddition")}/>
              <ButtonBox name="Subtraction" onClick={() => this.handleClick("displaySubtraction")}/>
              <ButtonBox name="Equation" onClick={() => this.handleClick("displayEquation")}/>
              <ButtonBox name="Dice" onClick={() => this.handleClick("displayDice")}/>
            </div>
        </div>
      </div>
      <div className="mainWrapper row">
        {this.state.displayAddition ? <AddMath /> : null}
        {this.state.displaySubtraction ? <SubtractMath /> : null}
        {this.state.displayEquation ? <EquationMath /> : null}
        {this.state.displayDice ? <DiceMath /> : null}
      </div>
      </div>
     );
  }
}
 
export default App;


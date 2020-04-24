import React, { Component } from 'react';

class ButtonBox extends Component {
    state = { }
    render() { 
        return ( 
            <div>
                <button className="btn btn-secondary ButtonBox" onClick={() => this.props.onClick(this.props.name)}>{this.props.name}</button>
            </div>
         );
    }
}
 
export default ButtonBox
import React, { Component } from 'react';
import './style.css';
class Button extends Component {
    render() {
        return (
            <button className='btn' type={this.props.buttonType} onClick={this.props.buttonClick} >{this.props.buttonName}</button>
        );
    }
}
export default Button;
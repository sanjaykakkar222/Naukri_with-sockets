import React, { Component } from 'react';
import './style.css';
class ErrorHandler extends Component {
  render() {
    let errors = Object.keys(this.props.errorList);
    return (
      errors.map((ErrorKey, ind) => {
        if (this.props.errorList[ErrorKey].length > 0) {
          return <p className='err' key={ind}>{ErrorKey} {this.props.errorList[ErrorKey]}</p>
        }
        else {
          return '';
        }
      })


    )
  }
}
export default ErrorHandler;



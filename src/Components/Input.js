import React from 'react';
class Input extends React.Component {
  render() {
    return (<div className="form-group">
      <input className="form-control" value={this.props.inputValue} type={this.props.inputType} name={this.props.inputName} placeholder={this.props.inputPlaceholder} onChange={this.props.inputChange}></input>
    </div>);
  }

}
export default Input;
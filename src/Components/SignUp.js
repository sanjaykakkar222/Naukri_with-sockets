import React, { Component } from 'react';
import Input from './Input';
import './style.css';
import Button from './Button';
import AppHeader from './appheader'
import AppFooter from './appFooter'
import ErrorHandler from './errorHandler';

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser:{},
      name: '',
      password: '',
      email: '',
      mobile: '',
      role:'user',
      location: '',
      formErrors: { name: '', email: '', password: '', mobile: '', login_email: '', login_password: '' },
      isNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
      isPhoneValid: false,
      isRoleValid:false,
      formValid: false,
      SignIn: true,

    }


  }
  //state change setit
  componentWillReceiveProps(nextProps) {
    this.setState({ currentUser: nextProps.currentUser }, () => {
        //  console.log(this.state.currentUser)
        localStorage.setItem("currentUser", JSON.stringify(nextProps.currentUser));
        if (nextProps.currentUser.role == 1) {
            return this.props.history.push('/company')
        } else {
            return this.props.history.push('/')
        }
    })
    console.log(nextProps)

}


  onChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    console.log(key,value)
    this.setState({
      [key]: value
    }, () => this.checkValidation(key, value));
  }
  checkValidation=(fieldName, value) =>{
    let errors = this.state.formErrors;
    let isPasswordValid = this.state.isPasswordValid;
    let isNameValid = this.state.isPasswordValid;
    let isPhoneValid = this.state.isPhoneValid;
    let isEmailValid = this.state.isEmailValid;
    let isRoleValid = this.state.isRoleValid;

    switch (fieldName) {
      case 'mobile':
        isPhoneValid = value.length === 10 && value.match(/^[0-9]+$/);;
        errors.mobile = isPhoneValid ? '' : ' number is not valid.';
        break;
    
      case 'email':
        isEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        errors.email = isEmailValid ? '' : 'invalid';
        break;
      case 'password':
       isPasswordValid = (value.length) >= 8 && value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
       //isPasswordValid =true;
       errors.password = isPasswordValid ? '' : 'is too Weak';
        break;
      case 'name':
        isNameValid = value.match(/^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/);
        errors.name = isNameValid ? '' : ' is required';
        break;
      case 'role':
        isRoleValid = value.match(/^[a-zA-Z]+$/);;
        errors.role = isRoleValid ? '' : ' is required';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: errors,
      isEmailValid: isEmailValid,
      isPasswordValid: isPasswordValid,
      isNameValid: isNameValid,
      isPhoneValid: isPhoneValid

    }, this.validation());
  }

  componentWillMount(){
    if(localStorage.getItem('currentUser')){
        this.props.history.push('/');
    }
} 
  validation=() =>{
    this.setState({
      formValid: this.state.isEmailValid &&
        this.state.isPasswordValid &&
        this.state.isNameValid &&
        this.state.isPhoneValid &&
        this.state.isRoleValid
    });
  }
  roleType=(type)=>{
    console.log(type)
    
  }
  onClickSignUp=(e)=>{
    e.preventDefault();
    this.props.postUser({
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      mobile: this.state.mobile,
      role: this.state.role
    });
 
  }
  render() {
    return (
      <div >
       <AppHeader></AppHeader>
        <div className='jumbotron'>
          
            <div><form >
              <h1>Signup </h1>

              <div>
                <ErrorHandler className='err' errorList={this.state.formErrors} />
              </div>
              <label>Name</label>
              <Input inputType={'text'} inputName={'name'} inputPlaceholder={'Name'} inputValue={this.state.name} inputChange={this.onChange}></Input>
              <label>Email</label>
              <Input inputType={'email'} inputName={'email'} inputPlaceholder={'Email'} inputValue={this.state.email} inputChange={this.onChange}></Input>
              <label>Mobile</label>
              <Input inputType={'tel'} inputName={'mobile'} inputPlaceholder={'Mobile'} inputValue={this.state.mobile} inputChange={this.onChange}></Input>
              
              <label>Role   </label>
              {/* <Input inputType={'tel'} inputName={'role'} inputPlaceholder={'role'} inputValue={this.state.role} inputChange={this.onChange}></Input> */}
              <div style={{paddingBottom: 15,}}>
              <select name='role'  onChange={this.onChange}>
             
                <option  value='user'  >user</option>
                <option  value='company' >company</option>
              </select>
              </div>
              <label>Password</label>
              <Input inputType={'password'} inputName={'password'} inputPlaceholder={'Password'} inputValue={this.state.password} inputChange={this.onChange}></Input><br></br>
              <Button buttonType={'submit'} buttonClick={this.onClickSignUp} buttonName={'Submit'}></Button>
            </form>
            </div>


          
        </div>

        {/* <AppFooter></AppFooter> */}
      </div>

    )
  }

 
}

export default Signup;
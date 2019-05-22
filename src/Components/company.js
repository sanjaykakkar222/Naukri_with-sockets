import React, { Component } from 'react';
import './style.css';
import Input from './Input';
import ErrorHandler from './errorHandler';
import Button from './Button';
import Appheader from './appheader'
import Appfooter from './appFooter'

var currentUser = {};

class company extends Component {
  
  constructor() {
    super()
    this.state = {
      designation: '',
      description:'',
      salary: '',
      location: '',


      name: '',
      password: '',
      email: '',
      mobile: '',
     

    }

  }

  componentWillMount() {
    currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (!localStorage.getItem('currentUser')) {
      this.props.history.push('/');
    }
  }
  onChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;

    this.setState({
      [key]: value
    });
  }

    role =['admin','company','user' ]
     
    
  onClickSignUp = (e) => {
    e.preventDefault();

    this.props.postJob({
          name: currentUser.name,
          
          user_id: currentUser._id,
          salary: this.state.salary,
          location:this.state.location,
         
          designation:this.state.designation,
          description : this.state.description,
          role:  this.role[currentUser.role]
        })
        return this.props.history.push('/');
  }
  render() {
    //console.log()
    return (
      <div>
        <Appheader />
        {/* <div className='content'> */}
        <div class="jumbotron">
          <form >
            <h2> Hello {currentUser.name} </h2>

            {/* <div>
                <ErrorHandler className='err' errorList={this.state.formErrors} />
              </div> */}
            <label>Designation</label>
            <Input inputType={'text'} inputName={'designation'} inputPlaceholder={'designation'} inputValue={this.state.designation} inputChange={this.onChange}></Input>
            <label>Salary</label>
            <Input inputType={'number'} inputName={'salary'} inputPlaceholder={'salary'} inputValue={this.state.salary} inputChange={this.onChange}  ></Input>
            <label>location</label>
            <Input inputType={'text'} inputName={'location'} inputPlaceholder={'location'} inputValue={this.state.location} inputChange={this.onChange}  ></Input>
            
            <label>Description</label>
            <Input inputType={'text'} inputName={'description'} inputPlaceholder={'description'} inputValue={this.state.description} inputChange={this.onChange}  ></Input>

            {/* <label>Password</label>
              <Input inputType={'password'} inputName={'password'} inputPlaceholder={'Password'} inputValue={this.state.password} inputChange={this.onChange}></Input><br></br> */}
            <Button buttonType={'submit'} buttonClick={this.onClickSignUp} buttonName={'AddJob'}></Button>
          </form>
        </div>
        {/* <Appfooter /> */}
      </div>

    );
  }
}
export default company;

import React, { Component } from 'react';
import './style.css';
import Input from './Input';
import Button from './Button';
import Appheader from './appheader'
import Appfooter from './appFooter'

var currentUser = {};
var temp;
class company extends Component {
 
  constructor() {
    super()
    this.state = {
      designation: '',
      salary: '',
      location: '',
      description:'',

      name: '',
      password: '',
      email: '',
      mobile: '',
    

    }

  }

  componentWillMount() {
      currentUser =JSON.parse(localStorage.getItem('currentUser'))
       temp =JSON.parse(this.props.match.params.job);
      console.log((temp))
    this.setState({
        salary : temp.salary,
        designation : temp.designation,
        location:temp.location,
        description: temp.description
    },()=>{
       // console.log(this.state)
    })
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
  
    this.props.updateJobs({
          name: temp.name,
           _id :temp._id,
          user_id: currentUser._id,
          salary: this.state.salary,
          location:this.state.location,
          designation:this.state.designation,
          role: temp.role,
          description:this.state.description
          
        })
       return this.props.history.push('/');
  }
  render() {
    //console.log()
    return (
      <div>
        <Appheader />
        <div class='jumbotron'>
          <form >
            <h2> Hello {currentUser.name} </h2>

            <label>Designation</label>
            <Input inputType={'text'} inputName={'designation'} inputPlaceholder={'designation'} inputValue={this.state.designation} inputChange={this.onChange}></Input>
            <label>Salary</label>
            <Input inputType={'number'} inputName={'salary'} inputPlaceholder={'salary'} inputValue={this.state.salary} inputChange={this.onChange}  ></Input>
            <label>location</label>
            <Input inputType={'text'} inputName={'location'} inputPlaceholder={'location'} inputValue={this.state.location} inputChange={this.onChange}  ></Input>
            <label>Descriprion</label>
            <Input inputType={'text'} inputName={'description'} inputPlaceholder={'description'} inputValue={this.state.description} inputChange={this.onChange}  ></Input>

           
            <Button  buttonType={'submit'} buttonClick={this.onClickSignUp} buttonName={'UpdateJob'}></Button>
          </form>
        </div>
        <Appfooter />
      </div>

    );
  }
}
export default company;

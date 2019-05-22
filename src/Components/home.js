//our home  component(contains all the component)
import React, { Component } from 'react';
import AppHeader from './appheader'
// import AppFooter from './appFooter'
import JobFilter from './jobFilter'
import JobListing from '../containers/applyContainer'
import '../App.css'

var currentUser;
 
export default class Home extends Component {

  constructor() {
    super();
    
    this.state = {
      //initializing states
      company: '',
      location: '',
      designation: '',
      jobs: [],
      applied:[]
    }


  }

  //when ever there is change in props 

  componentWillReceiveProps(nextProps) {
     
    if (this.state !== nextProps) {
      //console.log(this.state )
      this.setState({applied : nextProps.applied})
      return this.setState({ jobs: nextProps.jobs })
    }

  }

  componentDidMount(nextProps) {
    console.log(this.state.applied)
  
    this.props.getJobs();
    if (localStorage.getItem('currentUser')) {
      console.log('in condition')
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
      
      if (currentUser.role < 2) {
        console.log(this.props.getJobs(currentUser.name))
      } else {
        this.props.getJobs();
      }
    } else {
      this.props.getJobs();
    }


  }

  changeFilter(temp) {
    return this.setState({
      company: temp.company,
      location: temp.location,
      designation: temp.designation
    }, () => {


      //console.log('test')

    
    })

  }



  render() {
    console.log(this.state)
    return (
      <div className="App">

        <AppHeader />
        {/* access values by props in JobFilter */}
        <JobFilter filter={this.state} onfilterchange={(temp) => {  this.changeFilter(temp) }} />
        <div className='container-fluid'>
        <JobListing filterList={this.state} applied = {this.state.applied} jobs={ this.state.jobs.reverse()} />
        </div>
        {/* <AppFooter /> */}


      </div>
    )
  }


}

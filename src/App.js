import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './containers/jobContainer'
import SignIn from './containers/signInContainer'
import SignUp from './containers/signUpContainer'
import Company from './containers/companyContainer'
import EditJobs from './containers/editJobsContainer'
import Applied from './containers/appliedContainer'
import Chat from './chat/ChatApp'

export default class App extends  Component  {

  render() {

   
    return (
     
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={SignIn} />
        <Route path='/applied' component={Applied} />
        <Route path='/signup' component={SignUp} />
        <Route path='/editjobs/:job' component={EditJobs} />
        <Route path='/company' component={Company} />
        <Route path='/chat' component={Chat} />
      </BrowserRouter>
      
    )
  }
}



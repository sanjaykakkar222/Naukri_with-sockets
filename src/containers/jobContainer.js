import React, { Component } from 'react'
import Home from '../Components/home'
import  {connect} from  "react-redux";
import {getJobs,getAppliedJobs} from '../actions/actions'




const mapStateToProps=(state)=>{

   return {
  
    applied : state.fetchJobs.applied,
    jobs:state.fetchJobs.data
     

   }
}


//data goes from componnent to actions
const mapDispatchtoProps=(dispatch)=>{
    
    return {
        
        getJobs: (company)=>dispatch(getJobs(company)) ,
        getAppliedJobs: (user) => dispatch(getAppliedJobs(user))
       

    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Home)


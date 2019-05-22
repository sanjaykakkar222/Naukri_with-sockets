import React, { Component } from 'react'
import JobList from '../Components/JobListing'
import  {connect} from  "react-redux";
import {applyJobs} from '../actions/actions'




const mapStateToProps=(state)=>{
  //  console.log(state)
   return {
       applied:state.fetchJobs.applied
   }
}

const mapDispatchtoProps=(dispatch)=>{
    
    return {
        //dispatch,
        applyJobs: (company)=>dispatch(applyJobs(company)) ,
       // getJobSkills: () => dispatch(getJobSkills()),

    }
}
export default connect(null,mapDispatchtoProps)(JobList)


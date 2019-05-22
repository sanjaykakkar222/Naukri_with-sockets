import React, { Component } from 'react'
import Company from '../Components/company'
import  {connect} from  "react-redux";
import {postJob} from '../actions/actions'



const mapDispatchtoProps=(dispatch)=>{
    
    return {
        //dispatch,
        postJob: (company)=>dispatch(postJob(company)) ,
       // getJobSkills: () => dispatch(getJobSkills()),

    }
}
export default connect(null,mapDispatchtoProps)(Company)


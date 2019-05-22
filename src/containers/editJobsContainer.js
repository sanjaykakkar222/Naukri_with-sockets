import React, { Component } from 'react'
import EditJobs from '../Components/editJobs'
import  {connect} from  "react-redux";
import {updateJobs} from '../actions/actions'




// const mapStateToProps=(state)=>{
//   //  console.log(state)
//    return {
       
//        jobs:state.fetchJobs.data
//    }
// }

const mapDispatchtoProps=(dispatch)=>{
    
    return {
        //dispatch,
        updateJobs: (job)=>dispatch(updateJobs(job)) ,
       // getJobSkills: () => dispatch(getJobSkills()),

    }
}
export default connect(null,mapDispatchtoProps)(EditJobs)


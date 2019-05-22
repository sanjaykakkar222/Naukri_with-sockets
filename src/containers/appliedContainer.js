import React, { Component } from 'react'
import applied from '../Components/applied'
import  {connect} from  "react-redux";
import { getAppliedUsers,changeJobStatus,getAllUsers} from '../actions/actions'




const mapStateToProps=(state)=>{
  //console.log(state.userList )
   return {
   // fetchJobs:'state.fetchJobs',
    appliedUsers : state.fetchJobs.appliedUsers,
    userList : state.fetchJobs.users
   
     

   }
}

const mapDispatchtoProps=(dispatch)=>{
    
    return {
        //dispatch,
       
        getAppliedUsers: (user) => dispatch(getAppliedUsers(user)),
        // getUserList: (user)=> dispatch(getUserList(user)),
        getAllUsers : ()=> dispatch(getAllUsers()),
        changeJobStatus: (status)=>dispatch(changeJobStatus(status))
       // getJobSkills: () => dispatch(getJobSkills()),
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(applied)


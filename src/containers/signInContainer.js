import React, { Component } from 'react'
import SignIn from '../Components/SignIn'
import  {connect} from  "react-redux";
import {getUser} from '../actions/actions'




const mapStateToProps=(state)=>{
    console.log(state.user.data)
   return {       
       currentUser:state.user.data
          }
}

const mapDispatchtoProps=(dispatch)=>{
    
    return {
        //dispatch,
        getUser: (user)=>dispatch(getUser(user)) ,
       // getJobSkills: () => dispatch(getJobSkills()),

    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(SignIn)


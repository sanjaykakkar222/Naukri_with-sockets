import React, { Component } from 'react'
import SignUp from '../Components/SignUp'
import  {connect} from  "react-redux";
import {postUser} from '../actions/actions'


const mapStateToProps=(state)=>{
    console.log(state.user.data)
   return {       
       currentUser:state.user.data
          }
}


const mapDispatchtoProps=(dispatch)=>{
    
    return {
        postUser: (user)=>dispatch(postUser(user)) ,
        }
}
export default connect(mapStateToProps,mapDispatchtoProps)(SignUp)


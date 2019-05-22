import React, { Component } from 'react'

export default class usersCard extends Component {
    constructor(props) {
        super()
        this.state={
            userList:[],
        }
       
    }
    componentWillReceiveProps(nextProps){
        if(this.state.userList !==  nextProps.users){
            this.setState({userList : nextProps.users},()=>{
               
            })
        }
    }

    componentDidMount() {
        this.setState({userList : this.props.users},()=>{
             
        })
         
    }
    render() {
      
       return(
           <div>
          
             <div>{ this.state.userList.length}</div>
       
           </div>    
           
        
       ) 
 
    
    }
}


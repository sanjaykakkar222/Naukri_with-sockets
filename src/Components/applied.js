import React, { Component } from 'react'
import './cardStyle.css'
import AppHeader from './appheader'
import AppFooter from './appFooter'
var currentUser;



export default class applied extends Component {
    constructor() {
        super()
        this.state = {
            appliedUsers: [],
            userList: [],
            loaded: false,
            designation: '',
            location: '',
            status: ''

        }
    }

    

    componentWillReceiveProps(nextProps) {

        if (this.state.loaded !== nextProps.loaded) {
            this.setState({ appliedUsers: nextProps.appliedUsers }, () => {
                this.setState({ loaded: true })
            })

        }

        if (this.state.userList !== nextProps.userList) {
            this.setState({ userList: nextProps.userList }, () => {

            })
        }
        if (this.state.appliedUsers !== nextProps.appliedUsers) {
           
            this.setState({ appliedUsers: nextProps.appliedUsers }, () => {

            })

        }
      

    }

    componentWillMount() {
     


        if (localStorage.getItem('currentUser')) {
           
            currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.props.getAppliedUsers({ name: currentUser.name })
            this.props.getAllUsers();
        

        }

    }
   
    status = [
        'pending',
        'reviewed',
        'shortlisted',
        'selected',
        'rejected']
    statusColor = [
        '#FA882E',
        '#F1F50E',
        '#0EABF5  ',
        '#2CE550',
        '#FF3333']
    changeStatus = (e, id, th) => {
     
        console.log(e, id, th);
        this.props.changeJobStatus({
            "id": id,
            "status": e
        })
        

        this.props.getAppliedUsers({ name: currentUser.name })
        this.setState({ loaded: false })


    }

    onInputChange = (event) => {
        let val = event.target.value;
        let key = event.target.name;
       
        this.setState({ [key]: val })
    }



    onButtonClick = (e) => {
        e.preventDefault();
      

    }

    chatNavigate=(data)=>{
        this.props.history.push({
            pathname: '/chat',
            state: {
               reciever:data
            }
          })
}


    render() {
        let temp = [];

        //-----
        if (this.state.status == '' && this.state.location == '' && this.state.designation == '') {
            temp = this.state.appliedUsers;


        } else {

            temp = this.state.appliedUsers.filter((element, ind) => {
               
                if ((this.state.location) && (element.location).toLowerCase() !== (this.state.location).toLowerCase()) {
                  
                    return false;

                }
                if ((this.state.designation) && (element.designation).toLowerCase() !== (this.state.designation).toLowerCase()) {
                 
                    return false;
                }
                if ((this.state.status) && (this.status[element.job_status - 1]).toLowerCase() !== ( this.state.status).toLowerCase()) {

                    return false;
                }
                else {
             
                    return true;

                }
            })
        }
 
    let count = 1;
    return <div className="App">
      <AppHeader />
      <div>


     <form>
<input style={{borderRadius: 10,padding: 5}} type="text" placeholder="Designation" onChange={this.onInputChange} name='designation'></input>
<input style={{  margin:10, borderRadius: 10,padding: 5 }} type="text" placeholder="Location" onChange={this.onInputChange} name='location' ></input>
 <input  style={{   borderRadius: 10,padding: 5 }}type="text" placeholder="Status" onChange={this.onInputChange} name='status'></input>
  {/* <button style={{ margin: 10 }} onClick={this.onButtonClick}>Filter</button> */}
     </form>
 </div>
 <div className='container-fluid'>
{this.state.userList && this.state.appliedUsers &&
  <div>
    { temp.length>0 ?
     <div>
     {temp
    // .sort((a,b)=> {return a.designation - b.designation})
      .map((element, index) => {

     return (
 <div className='column1' >
<div className=" row ">
 <div className="card1">

<div> <h4><b>{element.designation} </b></h4></div>{

 this.state.userList.map((ele, ind) => {
  if (element.user_id == ele._id) {
     return (<div key={ind}  >

   <img src={require("./img_men.png")} alt="Avatar" style={{ width: 100 }} ></img>
    <h4><b>{ele.name}</b></h4>
   <div className="  "><b>email :</b>{ele.email}</div>
  <div className="  "><b>mobile :</b>{ele.mobile}</div>
  <div className="  "><b>location :</b>{ele.location}</div>
  <div><button className="w3-button w3-block btn1"  onClick={()=>{this.chatNavigate(ele)}}> chat </button></div>
 {/* <div>{ele.name}</div> */}
  <div style={{ display: 'inline-block' }}>
 <span><b>Status :</b></span>
 <span class="dropdown">
  <button id={`select_button${count}`} style={{ backgroundColor: `${this.statusColor[element.job_status - 1]}`, color: '#000000' }} class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.status[element.job_status - 1]}
  <span class="caret"></span></button>
 <ul class="dropdown-menu">
<li onClick={() => { return this.changeStatus('1', element._id) }} ><a href="#">pending</a></li>
<li onClick={() => { return this.changeStatus('2', element._id) }} ><a href="#">reviewed</a></li>
 <li onClick={() => { return this.changeStatus('3', element._id) }} ><a href="#">shortlisted</a></li>
 <li onClick={() => { return this.changeStatus('4', element._id) }} ><a href="#">selected</a></li>
 <li onClick={() => { return this.changeStatus('5', element._id) }} ><a href="#">rejected</a></li>
  <div style={{ display: 'none' }}>{count++}</div>
 </ul>
 </span>

 </div>

</div> 
)
}
 })}

  </div>
 </div>
</div>
 )
 })}
 </div>:<div className='notFound'>Not Found</div>}

 </div>

 }
 </div>
<div style={{display:'none'}}>{count = 0}</div>
 <AppFooter />
</div>
       
    }

}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class appHeader extends Component {
    SignInMenu() {
        this.nextPath('/signin')
    }
    SignUpMenu=()=> {
        this.nextPath('/signup')
    }
    logout=()=>{
       // console.log("logged out")
        localStorage.removeItem('currentUser')
    }

    render() {
       if(localStorage.getItem("currentUser")){
        var currentUser = JSON.parse(localStorage.getItem("currentUser"))
        //console.log(currentUser);
      
       }
        

        return (

            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                      
                        <a className="navbar-brand" href="">JOBHUNTER</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li> <Link to="">Home</Link></li>


                    </ul>
                    {currentUser ? <ul className="nav navbar-nav" style={{ float: "right" }}>

                        <li>
                            <Link to="/signin"> Hi {currentUser.name} </Link>
                        </li>
                        <li>
                        {localStorage.getItem('currentUser')?( currentUser.role < 2 ? <Link  to='/company'>Add Job</Link> :''):''}

                        </li>
                        <li>
                        {localStorage.getItem('currentUser')?( currentUser.role < 2 ? <Link   to='/applied'>Applied Candidates</Link>:''):''}

                        </li>
                        <li>
                            <Link to="/" ><span onClick = {this.logout}>Logout</span></Link>
                        </li>
                    </ul>
                        :
                        <ul className="nav navbar-nav" style={{ float: "right" }}>

                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                        </ul>}


                </div>

            </nav>
        )
    }
}
export default appHeader;
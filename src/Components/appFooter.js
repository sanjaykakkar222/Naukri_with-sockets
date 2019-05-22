import React, { Component } from 'react'
import "./style.css"
class appFooter extends Component {


    render() {
        return (
            <div class="footer">
             <img className="navbar-brand" src={require("./logo.png")} ></img>
  <p>© 2018 Copyright</p>
</div>
        )
    }
}
export default appFooter;
import  React,{ Component } from "react";
import {  Link } from "react-router-dom";
import history from "../../history/history";


export default class Navbar extends Component{


  logout(){
    localStorage.clear();
     history.push('/')
  }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#50b5e8"}}>
            <a className="navbar-brand" href="#"><img src = {require('../Style/Cri-Port11.png')} width="40px"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/home"><a>Home</a></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Users/"><a> Users</a></Link>
                </li>
                {/* <li class="nav-item">
                  <Link class="nav-link" to="/CrimeReport/">Crime Report</Link>
                </li> */}
                <li className="nav-item">
                  <Link class="nav-link" to="/MissingReport/">Missing Report</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/ComplainRecord/">Complain Report</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" onClick={() => this.logout()} >Log Out</Link>
                </li>
              </ul>
            </div>
          </nav>
      

        );
    }
}
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './index.css';
import '../Root/App.css';
import DashboardAd from "../../container/dashboard";
import Users1 from '../../container/user';
import Missing1 from '../../container/missing';
import ComplainRecord1 from '../../container/Complain';


function Index() {
  return <DashboardAd />;
}


function Users() {
  return <Users1 />;
}
function MissingReport() {
  return <Missing1 />
}
function ComplainRecord() {
  return <ComplainRecord1 />
}

function AppRouter() {
  return (
      <Router>
        <div>

          <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#50b5e8"}}>
            <a className="navbar-brand" href="#"><img src = {require('../Style/Cri-Port11.png')} width="40px"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/"><a>Home</a></Link>
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
              </ul>
            </div>
          </nav>

        <Route path="/" exact component={Index} />
        <Route path="/Users/" component={Users} />
        {/* <Route path="/CrimeReport/" component={CrimeReport} /> */}
        <Route path="/MissingReport/" component={MissingReport} />
        <Route path="/ComplainRecord/" component={ComplainRecord} />
      </div>
    </Router>
  );
}

export default AppRouter;

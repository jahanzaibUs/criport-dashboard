import React, { Component } from 'react';
import '../Style/index.css';
import '../Style/images/icons/favicon.ico';
import '../Style/vendor/bootstrap/css/bootstrap.min.css';
import '../Style/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import "../Style/vendor/animate/animate.css";
import "../Style/vendor/css-hamburgers/hamburgers.min.css";
import "../Style/vendor/animsition/css/animsition.min.css";
import "../Style/vendor/select2/select2.min.css";
import "../Style/vendor/daterangepicker/daterangepicker.css";
import "../Style/css/util.css";
import "../Style/css/main.css";


class Crime extends Component {
    render() {
      return (
    <div>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </ button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Users</a>
                    </li>
                    <li class="nav-item dropdown">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Crime Report</a>
                    </li>
                </li>
                <li class="nav-item">
                        <a class="nav-link" href="#">Missing Request</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
        </div>
    </div>
        );
    }
  }
  export default Crime
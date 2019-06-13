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


class CrimeReport extends Component {
    render() {
      return (
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
					<span className="login100-form-title">
						Sign In
					</span>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
						<input className="input100" type="text" name="username" placeholder="Username" />
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Please enter password">
						<input className="input100" type="password" name="pass" placeholder="Password" />
						<span className="focus-input100"></span>
					</div>

					<div className="text-right p-t-13 p-b-23">
						<span className="txt1">
							Forgot
						</span>

						<a href="#" className="txt2">
							Username / Password?
						</a>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn" onClick="#">
							Sign in
						</button>
					</div>

					
				</form>
			</div>
		</div>
	</div>
	
      );
    }
  }


  export default CrimeReport

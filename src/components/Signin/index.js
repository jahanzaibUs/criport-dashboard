import React, { Component } from 'react';

import { withRouter } from "react-router-dom";
import { ClipLoader } from 'react-spinners'
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


class Signin extends Component {

	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			err: "",
			loader: false
		}
	}

	

	componentWillReceiveProps(next) {
		this.setState({ loader: next.loader, err: next.result })
	}
	routeChange(evt) {
		// let path = `../router/index.js`;
		const { email, password } = this.state;
		evt.preventDefault();
		let data = {
			email: email,
			password: password
		}
		this.props.login(data)
		// console.log(this.state);

		// console.log(this.props.history)
		// this.props.history.push('/home');
	}



	render() {
		console.log(this.state)
		return (

			<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100">
						<form style={{ height: 500 }} className="login100-form validate-form p-l-55 p-r-55 p-t-178">
							<span style={{ background: "#50b5e8" }} className="login100-form-title">
								Sign In
					</span>

							<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
								<input className="input100" type="text" onChange={(e) => this.setState({ email: e.target.value })}
									name="username" placeholder="Username" />
								<span className="focus-input100"></span>
							</div>

							<div className="wrap-input100 validate-input" data-validate="Please enter password">
								<input className="input100" type="password" onChange={(e) => this.setState({ password: e.target.value })}
									name="pass" placeholder="Password" />
								<span className="focus-input100"></span>
							</div>

							<div className="text-center p-t-13 p-b-23">

								<a href="#" class="txt2">
								{
									this.state.err? this.state.err
									:""}
						</a>
							</div>

							<div className="container-login100-form-btn">
							
							{
								this.state.loader?

								<ClipLoader
								
								sizeUnit={"px"}
								size={50}
								color={'#50b5e8'}
								loading={this.state.loader}
								/>
									:
								 <button
									style={{background:"#50b5e8"}} className="login100-form-btn" onClick={(evt) =>this.routeChange(evt)} >
									Sign in
								</button>
							}
							</div>


						</form>
					</div>
				</div>
			</div>

		);
	}
}


export default withRouter(Signin);


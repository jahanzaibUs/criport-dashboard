import React, { Component } from 'react';
import Signin from "../../components/Signin";
import { connect } from "react-redux"
import { signin } from '../../store/action/action';
class SigninCon extends Component {
  render() {
    return (
      <Signin
        login={this.props.Signin}
        loader={this.props.loader}
        result={this.props.result}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    loader: state.root.loader,
    result: state.root.userResult,
    //  productData : state.root.productData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // falseTheFlag : (flag) => {dispatch(falseTheFlag(flag))}
    Signin: (data) => { dispatch(signin(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninCon)
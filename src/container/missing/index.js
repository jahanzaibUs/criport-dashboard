import React, { Component } from 'react';
import Missing from "../../components/missing";
import {connect} from "react-redux";
import { allmissing, allowmissing, deletemissing } from '../../store/action/action';

class Missing1 extends Component {

  componentWillMount(){
    this.props.missingpeople()
  }
    render() {
      return (
        <Missing 
          missing= {this.props.detailmissing}
          allowmissing={this.props.allowmissing}
          deletemissing={this.props.deletemissing}
        />
      );
    }
  }



  function mapStateToProps(state) {
    console.log(state.root)
    return {
  
        detailmissing: state.root.missingpeople
      //  productData : state.root.productData
       
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
  
        missingpeople : () => {dispatch(allmissing())},
        allowmissing :(data) => {dispatch(allowmissing(data))},
        deletemissing: (data) => {dispatch(deletemissing(data))}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Missing1);
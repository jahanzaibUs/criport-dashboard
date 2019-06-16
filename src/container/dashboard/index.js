import React, { Component } from 'react';
import DashboardAdmin from "../../components/dashboard/index";
import {connect} from "react-redux";
import { crimedata } from '../../store/action/action';

class DashboardAd extends Component {
  constructor(){
    super();
    this.state={
      alldata:[]
    }
  }
  componentDidMount(){
    this.props.getdata();
  }

  
  // componentDidMount(){
  //   this.setState({alldata:this.props.alldata})
  // }
    render() {
      return (
        <DashboardAdmin alldata={this.props.alldata} />
      );
    }
  }

  
function mapStateToProps(state) {
  return {
      alldata:state.root.alldata
    //  productData : state.root.productData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // falseTheFlag : (flag) => {dispatch(falseTheFlag(flag))}
    getdata: () => {dispatch(crimedata())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DashboardAd)
import React, { Component } from 'react';
import Users from "../../components/user";
import { connect } from "react-redux"
import { allusers } from '../../store/action/action';


class Users1 extends Component {
  componentDidMount(){
    console.log("fsdfsdfsdfsdf")
    this.props.getallusers()
  }
  render() {
    return (
      <Users
          users={this.props.users}
      />
    );
  }
}




function mapStateToProps(state) {
  console.log(state.root)
  return {

        users : state.root.users
    //  productData : state.root.productData
     
  }
}

function mapDispatchToProps(dispatch) {
  return {

    getallusers: () => { dispatch(allusers()) }
    // getdata: () => {dispatch(crimedata())}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users1);
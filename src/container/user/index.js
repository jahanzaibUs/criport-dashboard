import React, { Component } from 'react';
import Users from "../../components/user";
import { connect } from "react-redux"
import { allusers, suspend, deleteuser } from '../../store/action/action';


class Users1 extends Component {
  componentDidMount(){
    this.props.getallusers();
    
  }

  
  render() {
    return (
      <Users
          user={this.props.getuser}
          suspend={this.props.suspenduser}
          deleteuser={this.props.deleteuser}
      />
    );
  }
}




function mapStateToProps(state) {
  console.log(state.root)
  return {

        getuser : state.root.alluser
    //  productData : state.root.productData
     
  }
}

function mapDispatchToProps(dispatch) {
  return {

    getallusers: () => { dispatch(allusers())},
    suspenduser: (data) => {dispatch(suspend(data))},
    deleteuser: (data) => {dispatch(deleteuser(data))}
    // getdata: () => {dispatch(crimedata())}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users1);
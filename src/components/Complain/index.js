import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { submitrecord } from '../../store/action/action';
import {connect } from "react-redux";
import RenderMap from "./map";
import "./index.css";

// const style = {
//     width: '50%',
//     height: '80%'
//   }

class ComplainRecord extends Component {


  render() {
    return (


      <RenderMap  
            crime={this.props.submitcrime}
        />



    )
  }
}

function mapStateToProps(state) {
  console.log(state.root)
  return {
  //  productData : state.root.productData
  }
}

function mapDispatchToProps(dispatch) {
  return {

     submitcrime : (details) => {dispatch(submitrecord(details))} 
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(ComplainRecord)
import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Map from './map.js';

import "./index.css";

// const style = {
//     width: '50%',
//     height: '80%'
//   }

class ComplainRecord extends Component {

    
      render() {
          return (
        <div className="container">
            <div className="wrap-login1001">
                <div class="validate-input inputf" data-validate = "Please enter Name">
			        <input class="input100" type="Name" name="name" placeholder="Name" />
			        <span class="focus-input100"></span>
			    </div>
                <div class="validate-input inputf" data-validate = "Please enter Detaila">
			        <input class="input100" type="Detail" name="detail" placeholder="Detail" />
			        <span class="focus-input100"></span>
			    </div>
                <span><button type="button" class="login100-form-btn1">Edit</button> </span>
            
            </div>
                
                <div className="container">
                {/* <Map
                    google={this.props.google}
                    style={style}
                    center={{
                        lat: 24.836804,
                        lng: 67.187777
                    }}
                    zoom={15}
                    onClick={this.onMapClicked}
                >
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
 
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        
                    </InfoWindow>
                </Map> */}
        
                               <Map />


                </div>
        </div>
        )
      }
        }

        export default ComplainRecord;
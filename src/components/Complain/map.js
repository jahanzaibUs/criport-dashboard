import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Navbar from '../navbar';


class RenderMap extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div >
                <Navbar />
                <Map google={this.props.google} zoom={14}>

                  
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBG5a6UI_mX3l12TcYA58fkbHZpGTfGGiY")
})(RenderMap)
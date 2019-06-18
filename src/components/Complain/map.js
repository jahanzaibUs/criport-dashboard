import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper,MarkerProps } from 'google-maps-react';
import Navbar from '../navbar';


class RenderMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialRegion: {
                lat: 24.8607,
                lng: 67.0011
            },
            name: "",
            description: "",
            address: "",
            crimetype: ""
        }
    }
    
    mapregion(e,map,cor){
            console.log(e,map);
          
    }

    submit(e){
        console.log(this.state);
        e.preventDefault();
    }

    render() {

        return (
            <div >
                <Navbar />
                <div style={{ display: "inline-flex", justifyContent: "center", width: "100%", marginTop: 0 }}>

                    {/* <form style={{ height: 500, width: "80%", alignSelf: "center" }} className="login100-form validate-form p-l-55 p-r-55 p-t-178"> */}
                    <form style={{ height: 500, width: "80%", alignSelf: "center" }} className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" onChange={(e) => this.setState({name:e.target.value})}
                             class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <input type="text" class="form-control" onChange={(e) => this.setState({description:e.target.value})}
                             id="exampleInputPassword1" placeholder="Description" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Address</label>
                            <input type="text" class="form-control" onChange={(e) => this.setState({address:e.target.value})}
                             id="exampleInputPassword1" placeholder="Address" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Crime Type</label>
                            <select className="form-control" onChange={(e) => this.setState({crimetype:e.target.value})} id="exampleFormControlSelect1">
                                <option value="Murder">Murder</option>
                                <option value="Harrassment">Harrassment</option>
                                <option value="Mobile" >Mobile</option>
                                <option value="Bike">Bike</option>
                                <option value="Car">Car</option>
                            </select>
                        </div>
                        <button type="submit" onClick={(e) => this.submit(e)} class="btn btn-primary">Submit</button>
                    </form>




                    <form style={{ width: "80%" }} className="login100-form validate-form p-l-55 p-r-55 p-t-178">

                        <div className="form-group" style={{ display: "inline-flex", justifyContent: "center", width: "100%",  height: 500 }}>

                            

                            <Map 
                            centerAroundCurrentLocation={true} google={this.props.google}
                                
                                onDragend={(e,map,cor) => this.mapregion(e,map,cor)}
                            >
                            
                                {/* <Marker  draggable={true}
                                  onClick={(e,map,cor) => this.mapregion(e,map,cor)}
                                  position={this.state.initialRegion}
                                /> */}

                            </Map>
                            </div>


                        

                    </form>
                </div>
            </div>

        )
    }
}
// export default RenderMap
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAHBGZidafdo5nufMCAHiGed8Q2vrs-lbk")
})(RenderMap)
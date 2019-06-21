import React, { Component } from 'react';
import { Map,Marker, GoogleApiWrapper } from 'google-maps-react';
import Navbar from '../navbar';
import Footer from '../Footer';


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
            crimetype: "",
            err: ""
        }
    }

    // componentDidMount() {

    //     var marker = new google.maps.Marker({
    //         position: {
    //             at: 24.8607,
    //             lng: 67.0011
    //         },
    //         draggable: true
    //     })
    //     google.maps.event.addListener(marker, "dragend", function () {
    //         console.log(marker.getPosition())
    //     })
    // }

    mapregion(mapProps, map, clickevt) {
        console.log(mapProps, map, clickevt);

    }

    submit(e) {
        console.log(this.state);
        e.preventDefault();
        if(this.state.name === "" || this.state.description === "" || this.state.address === "" || this.state.crimetype ===""){
            this.setState({err: "Please fill all details"})
        }
        else {
            this.setState({err: ""});
            let details = {

             

                    name : this.state.name,
                    typeid: this.state.crimetype,
                    description: this.state.description,
                    address : this.state.address,
                    location: {
                        logitude: 24.850704,
                        latitude:  67.004081
                    }
            
            }
            console.log("chalra ahe ")
           this.props.crime(details)
           this.setState({
               name : "",
               description : "",
               address : "",
               crimetype :"",

           })

        }
    }

    getposition(evt) {
        console.log(evt)
    }

    render() {
        let lat = this.props.lat;
        let lng = this.props.lng;
        console.log(this.props)
        return (
            <div >
                <Navbar />
                <div style={{ display: "inline-flex", justifyContent: "center", width: "100%", marginTop: 0 }}>

                    {/* <form style={{ height: 500, width: "80%", alignSelf: "center" }} className="login100-form validate-form p-l-55 p-r-55 p-t-178"> */}
                    <form style={{ height: 600, width: "80%", alignSelf: "center" }} className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input value={this.state.name} type="text" onChange={(e) => this.setState({ name: e.target.value })}
                                class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <input value={this.state.description} type="text" class="form-control" onChange={(e) => this.setState({ description: e.target.value })}
                                id="exampleInputPassword1" placeholder="Description" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Address</label>
                            <input value={this.state.address} type="text" class="form-control" onChange={(e) => this.setState({ address: e.target.value })}
                                id="exampleInputPassword1" placeholder="Address" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Crime Type</label>
                            <select defaultValue={this.state.crimetype} className="form-control" onChange={(e) => this.setState({ crimetype: e.target.value })} id="exampleFormControlSelect1">
                                <option>Select</option>
                                <option  value="murder">Murder</option>
                                <option value="harrassment">Harrassment</option>
                                <option value="mobile" >Mobile</option>
                                <option value="bike">Bike</option>
                                <option value="car">Car</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <p>{this.state.err === "" ? "" : this.state.err}</p>

                        </div>
                        <button type="submit" onClick={(e) => this.submit(e)} class="btn btn-primary">Submit</button>
                    </form>




                    <form style={{ width: "80%" }} className="login100-form validate-form p-l-55 p-r-55 p-t-178">

                        <div className="form-group" style={{ display: "inline-flex", justifyContent: "center", width: "100%", height: 500 }}>



                            <Map
                            style={{height:600}}
                            //    controlSize={200}
                                initialCenter={{
                                    lat: lat,
                                    lng: lng
                                }}
                                onClick={(mapProps, map, clickevt) => this.mapregion(mapProps, map, clickevt)}
                                centerAroundCurrentLocation={true} google={this.props.google}
                              
                            >

                                <Marker draggable={true}
                                    onDragend={(evt) => this.getposition(evt)}
                                     position={this.state.initialRegion}
                                    crossOnDrag={true}
                                />

                            </Map>
                        </div>




                    </form>
                </div>
                 <Footer />
            </div>

        )
    }
}
// export default RenderMap
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAHBGZidafdo5nufMCAHiGed8Q2vrs-lbk")
})(RenderMap)
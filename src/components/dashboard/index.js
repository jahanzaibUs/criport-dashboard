import React, { Component } from 'react';

import PieChart from 'react-minimal-pie-chart';
import { Link } from "react-router-dom";
import Navbar from '../navbar';
import DonutChart from 'react-donut-chart';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Footer from "../Footer"
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

class DashboardAdmin extends Component {


    constructor() {
        super();
        this.state = {
            details: [],
            bike: [],
            car: [],
            murder: [],
            harrasment: [],
            mobile: [],

        }
    }

    componentWillReceiveProps(next) {
        console.log(next);
        this.setState({ details: next.alldata });

        const details = next.alldata;
        let bike = [];
        let car = [];
        let harrasment = [];
        let murder = [];
        let mobile = [];

        details && details.map((text, index) => {
            console.log(text, "line35")
            if (text.details.typeid === "bike") {
                bike.push(text)
            }
            else if (text.details.typeid === "car") {
                car.push(text)
            }
            else if (text.details.typeid === "harrasment") {
                harrasment.push(text)
            }
            else if (text.details.typeid === "mobile") {
                mobile.push(text)
            }
            else if (text.details.typeid === "murder") {
                murder.push(text)
            }
        })
        this.setState({ bike: bike, car: car, harrasment: harrasment, mobile: mobile, murder: murder })

        // }
        //     componentDidMount(){
        //         console.log(this.state.details, "line 32")
        //         const  {details} =this.state;
        //         let bike =[];
        //         let car=[];
        //         let harrasment=[];
        //         let murder=[];
        //         let mobile=[];

        //         details  && details.map((text,index)=>{
        //             console.log(text,"line35")
        //             if(text.details.typeid ===  "bike"){
        //                 bike.push(text)
        //             }
        //             else if(text.details.typeid === "car"){
        //                 car.push(text)
        //             }
        //             else if(text.details.typeid ==="harrasment"){
        //                 harrasment.push(text)
        //             }
        //             else if(text.details.typeid === "mobile"){
        //                 mobile.push(text)
        //             }
        //             else if(text.details.typeid ==="murder"){
        //                 murder.push(text)
        //             }
        //         })

        //         this.setState({bike:bike, car:car,harrasment:harrasment,mobile:mobile,murder:murder})
        //     }
    }
    render() {
        console.log(this.state)
        return (

            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div style={{ display: "inline-flex" }} className="col-12 col-6" id="Home">


                            <div style={{ width: "50%", height: 600, display: "flex", alignItems: "center" }}>
                                <DonutChart


                                    data={[{
                                        label: 'Car',
                                        value: this.state.car.length,

                                    },
                                    {
                                        label: 'Bike',
                                        value: this.state.bike.length,

                                    },
                                    {
                                        label: 'Mobile',
                                        value: this.state.mobile.length,

                                    },
                                    {
                                        label: 'Harrasment',
                                        value: this.state.harrasment.length,

                                    },
                                    {
                                        label: 'Murder',
                                        value: this.state.murder.length
                                    }
                                    ]}

                                />
                            </div>

                            <div style={{
                                width: '100%', display: "inline-flex", justifyContent: "space-between",
                                alignItems: "center", flexWrap: "wrap",
                                height: 600,
                                marginRight: '0%', marginTop: '1%', padding: 10
                            }}>


                                <div style={{ width: "20%" }} >


                                        <h2 style={{fontSize:20 ,textAlign:"center"}}>Car</h2>
                                    <CircularProgressbar
                                        
                                        text={`${this.state.car.length + "%"}`}
                                        value={this.state.car.length}

                                    />


                                </div>

                                <div style={{ width: "20%" }} >

                                <h2 style={{fontSize:20,textAlign:"center"}}>Bike</h2>
                                    <CircularProgressbar

                                        text={`${this.state.bike.length}%`}
                                        value={this.state.bike.length}

                                    />


                                </div>


                                <div style={{ width: "20%",textAlign:"center"}} >

                                <h2 style={{fontSize:20}}>Mobile</h2>
                                    <CircularProgressbar

                                        text={`${this.state.mobile.length}%`}
                                        value={this.state.mobile.length}

                                    />


                                </div>


                                <div style={{ width: "20%",textAlign:"center"}} >

                                <h2 style={{fontSize:20}}>Harrasment</h2>
                                    <CircularProgressbar

                                        text={`${this.state.harrasment.length}%`}
                                        value={this.state.harrasment.length}

                                    />


                                </div>
                                <div style={{ width: "20%" ,textAlign:"center"}} >

                                <h2 style={{fontSize:20}}>Murder</h2>

                                    <CircularProgressbar

                                        text={`${this.state.murder.length}%`}
                                        value={this.state.murder.length}

                                    />


                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

        );
    }
}
export default DashboardAdmin
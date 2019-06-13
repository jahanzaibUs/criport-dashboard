import React, { Component } from 'react';

import PieChart from 'react-minimal-pie-chart';
import { Link } from "react-router-dom";
import Navbar from '../navbar';
import DonutChart from 'react-donut-chart'
class DashboardAdmin extends Component {
    render() {
        return (

            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div style={{display:"inline-flex"}} className="col-12 col-6" id="Home">


                            <div style={{ background: "red", width: "50%", height: 800, display: "flex", alignItems: "center" }}>
                                <DonutChart

                                    color={["red"]}
                                    data={[{
                                        label: 'Car',
                                        value: 20,

                                    },
                                    {
                                        label: 'Bike',
                                        value: 10,

                                    },
                                    {
                                        label: 'Snatching',
                                        value: 35,

                                    },
                                    {
                                        label: 'Chart',
                                        value: 35,

                                    },
                                    ]} />
                            </div>

                            <div style={{ float: 'right', marginRight: '20%', marginTop: '1%' }}>

                                <div style={{ float: 'right' }} >
                                    <div className="col-3" >
                                        <PieChart doughnut={false} style={{ width: 200, position: 'relative' }}
                                            data={[
                                                { title: 'One', value: 10, color: '#E38627' },
                                                { title: 'Two', value: 15, color: '#C13C37' },
                                                { title: 'Three', value: 20, color: '#6A2135' },
                                            ]}
                                        >

                                            <div className="card-body">
                                                <h5 className="card-title">this is the card 3</h5>
                                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                                <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>
                                            </div>
                                        </PieChart>
                                    </div>
                                </div>
                                <div style={{ float: 'right' }} >
                                    <div className="col-3" >
                                        <PieChart doughnut={false} style={{ width: 200, position: 'relative' }}
                                            data={[
                                                { title: 'One', value: 10, color: '#E38627' },
                                                { title: 'Two', value: 15, color: '#C13C37' },
                                                { title: 'Three', value: 20, color: '#6A2135' },
                                            ]}
                                        >

                                            <div className="card-body">
                                                <h5 className="card-title">this is the card 3</h5>
                                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                                <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>
                                            </div>
                                        </PieChart>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default DashboardAdmin
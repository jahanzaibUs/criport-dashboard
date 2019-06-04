import React, { Component } from 'react';

import PieChart from 'react-minimal-pie-chart';


class DashboardAdmin extends Component {
    render() {
      return (
         
    <div className="container-fluid">
        <div className="row justify-content-md-center">
            <div className="col-12 col-6" id="Home">
                <div className="card1 col-6" style={{marginLeft:'10%'}}>
                
                <PieChart style={{width:500, position:'relative',float: 'left',margin: 20}}
                    data={[
                        { title: 'One', value: 10, color: '#E38627' },
                        { title: 'Two', value: 15, color: '#C13C37' },
                        { title: 'Three', value: 20, color: '#6A2135' },
                    ]}                
                >
                
                    
                    <div className="card-body">
                        <h5 className="card-title">Card with stretched link</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>
                    </div>
                    </PieChart>
                </div>

                <div style={{float:'right', marginRight:'20%', marginTop:'1%'}}>
                <div  className="col-3">
                
                <PieChart style={{width:200, position: 'relative'}} 
                    data={[
                        { title: 'One', value: 10, color: '#E38627' },
                        { title: 'Two', value: 15, color: '#C13C37' },
                        { title: 'Three', value: 20, color: '#6A2135' },
                    ]}
                >
                
                    <div className="card-body">
                        <h5 className="card-title">this is the card 2</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>
                    </div>
                </PieChart>
                </div>
                <div style={{float:'right'}} >
                <div className="col-3" >
                <PieChart style={{width:200, position: 'relative'}}
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

        );
    }
  }
  export default DashboardAdmin
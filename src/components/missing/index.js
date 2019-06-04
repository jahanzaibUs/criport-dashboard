import React, { Component } from 'react';


class Missing extends Component {
    render() {
      return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <div className="col-12 col-md-8" id="User" >
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><img src = {require("../Style/images/Design.png")} width="60px" height="60px" /></td>
                      
                        <span><button type="button" class="btn btn-primary">Edit</button> </span>
                        <span><button type="button" class="btn btn-primary">Delete</button> </span>
                        <span><button type="button" class="btn btn-primary">Suspend</button> </span>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <span><button type="button" class="btn btn-primary">Edit</button> </span>
                        <span><button type="button" class="btn btn-primary">Delete</button> </span>
                        <span><button type="button" class="btn btn-primary">Suspend</button> </span>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <span><button type="button" class="btn btn-primary">Edit</button> </span>
                        <span><button type="button" class="btn btn-primary">Delete</button> </span>
                        <span><button type="button" class="btn btn-primary">Suspend</button> </span>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        );
    }
  }
  export default Missing
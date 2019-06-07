import React, { Component } from 'react';


class Missing extends Component {
    render() {
      return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <div className="col-12 col-md-12" id="User" >
            <table className="table">
                <thead  style={{background:"#035279",color:"white"}}>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Suspend</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><img src = {require("../Style/images/Design.png")} width="60px" height="60px" /></td>
                      
                        <td><button type="button" class="btn btn-primary">Edit</button> </td>
                        <td><button type="button" class="btn btn-primary">Delete</button> </td>
                        <td><input type="checkbox" checked data-toggle="toggle" data-onstyle="success" /></td>
                    </tr>
                  
                </tbody>
            </table>
            </div>
        </div>
        );
    }
  }
  export default Missing
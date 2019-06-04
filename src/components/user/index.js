import React, { Component } from 'react';


class Users extends Component {
    render() {
      return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <div className="col-md-8">
            <table className="table container-fluid">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">CNIC</th>
                        <th scope="col">Cell No.</th>
                        <th scope="col">Location</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <span><button type="button" class="btn btn-primary">Edit</button> </span>
                        <span><button type="button" class="btn btn-primary">Delete</button> </span>
                        <input type="checkbox" checked data-toggle="toggle" data-onstyle="success" />
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <span><button type="button" class="btn btn-primary">Edit</button> </span>
                        <span><button type="button" class="btn btn-primary">Delete</button> </span>
                        <input type="checkbox" checked data-toggle="toggle" data-onstyle="success" />
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <span><button type="button" class="btn btn-primary">Edit</button> </span>
                        <span><button type="button" class="btn btn-primary">Delete</button> </span>
                        <input type="checkbox" checked data-toggle="toggle" data-onstyle="success" />
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        );
    }
  }
  export default Users
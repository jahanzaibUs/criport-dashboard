import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button'
import Navbar from '../navbar';


class Users extends Component {
    constructor() {
        super(); {
            this.state = {
                value: false
            }
        }
    }
    render() {
        return (

            <div>
                    <Navbar />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <div className="col-md-12">
                        <table className="table container-fluid">
                            <thead style={{ background: "#035279", color: "white" }}>
                                <tr>
                                    <th scope="col">Sno</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">CNIC</th>
                                    <th scope="col">Cell No.</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Details</th>
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
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td><button type="button" class="btn btn-primary">Edit</button> </td>
                                    <td><button type="button" class="btn btn-primary">Delete</button> </td>
                                    <td>
                                        <ToggleButton

                                            value={this.state.value || false}
                                            onToggle={(value) => {
                                                this.setState({
                                                    value: !value,
                                                })
                                            }} />
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Users
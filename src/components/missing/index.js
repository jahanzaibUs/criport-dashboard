import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button'
import { Link } from "react-router-dom";
import Navbar from '../navbar';
import Footer from '../Footer';


class Missing extends Component {
    constructor() {
        super(); {
            this.state = {
                value: false,
                Missing: []
            }
        }
    }

    componentWillReceiveProps(next) {
        this.setState({ Missing: next.missing })
    }


    suspend(text){
        console.log(text)
        let data = {
            approve : !text.persons.approve,
            uid: text._id,
            Name: text.persons.Name,
            Description: text.persons.Description,
            dateAndTime: new Date(),
            iamgeURL: text.persons.iamgeURL,
            Location : text.persons.Location
        }
       this.props.allowmissing(data)
    }

    deletemissing(text){
        console.log(text);
        let data = {
            uid: text._id
        }
        this.props.deletemissing(data)
    }
    render() {
        console.log(this.state.Missing)
        return (

            <div>
                <Navbar />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <div style={{ maxHeight: 600, height: 600, overflowY: "scroll" }} className="col-12 col-md-12" id="User" >
                        <table className="table">
                            <thead style={{ background: "#035279", color: "white" }}>
                                <tr>
                                    <th scope="col">SNo</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>

                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                    <th scope="col">Allow</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    this.state.Missing.length > 0 && this.state.Missing.map((text, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{++index}</th>
                                                <td>{text.persons.Name}</td>
                                                <td>{text.persons.Description}</td>

                                                <td><button type="button" class="btn btn-primary">Edit</button> </td>
                                                <td><button type="button" onClick={() => this.deletemissing(text)} class="btn btn-primary">Delete</button> </td>
                                                <td>
                                                {
                                                       text.persons.approve  ?
                                                       <button onClick={() => this.suspend(text)} type="button" class="btn btn-danger">Block</button> :
                                                       <button  onClick={() => this.suspend(text)} type="button" class="btn btn-success">Allow</button>
                                                   }
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                               

                            </tbody>
                        </table>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
export default Missing
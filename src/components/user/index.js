import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button'
import Navbar from '../navbar';
import Footer from '../Footer';


class Users extends Component {
    constructor() {
        super(); {
            this.state = {
                value: false,
                users: [],
                update: null,
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                gender: "",
                phoneNumber: ""
            }
        }
    }


    componentWillReceiveProps(next) {
        console.log("line 17", next.user);
        this.setState({ users: next.user })
    }
    suspend(text) {
        console.log(text._id);
        let data = {
            suspend: !text.suspend,
            uid: text._id
        }
        this.props.suspend(data);
        // var array = this.state.users;
        // array.map((text,ind) =>  {
        //         console.log(i,ind)
        //     if(index === ind){


        //         if(text.suspend){
        //             console.log(text.suspend)
        //             text.suspend = !value
        //         }
        //     }
        // })

        //  this.setState({users : array})
    }

    deleteuserprofile(text) {
        console.log(text._id);
        let data = {
            uid: text._id
        }
        this.props.deleteuser(data)
    }

    edit(text, index) {
        console.log(text,index)
        this.setState({
            update: index,
            firstname: text.firstname,
            lastname: text.lastname,
            gender: text.gender,
            password: text.password,
            phoneNumber: text.phoneNumber
        })
    }
    render() {
        return (

            <div>
                <Navbar />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <div style={{ maxHeight: 600, height: 600, overflowY: "scroll" }} className="col-md-12">
                        <table className="table container-fluid">
                            <thead style={{ background: "#035279", color: "white" }}>
                                <tr>
                                    <th scope="col">Sno</th>
                                    <th scope="col">Firstname</th>
                                    <th scope="col">Lastname</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                    <th scope="col">Suspend</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    this.state.users.length > 0 && this.state.users.map((text, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{++index}</th>
                                                {
                                                    this.state.update === index ?
                                                        
                                                       <td>

                                                       <input value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} /> 
                                                       </td> 
                                                       :
                                                        <td>{text.firstname}</td>
                                                }
                                                 {
                                                    this.state.update === index ?
                                                        <td>
                                                        <input value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} /> </td> :
                                                        <td>{text.lastname}</td>
                                                }
                                                 {
                                                    this.state.update === index ?

                                                    <td><input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /></td> :
                                                        <td>{text.email}</td>
                                                }

                                                {
                                                    this.state.update === index ?

                                                        <td><input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} /></td> :
                                                        <td>{text.password}</td>
                                                }
                                                  {
                                                    this.state.update === index ?

                                                    <td><input value={this.state.phoneNumber} onChange={(e) => this.setState({ phoneNumber: e.target.value })} /></td> :
                                                        <td>{text.phoneNumber}</td>
                                                }
                                                  {
                                                    this.state.update === index ?

                                                       <td><input value={this.state.gender} onChange={(e) => this.setState({ gender: e.target.value })} /></td> :
                                                        <td>{text.gender}</td>
                                                }
                                                <td>
                                                    {
                                                        this.state.update === index ?

                                                        <button type="button" class="btn btn-primary" >Update</button> :
                                                        <button type="button" class="btn btn-primary" onClick={() => this.edit(text,index)}>Edit</button> 

                                                    }

                                                </td>
                                                <td><button type="button" onClick={() => this.deleteuserprofile(text)}
                                                    class="btn btn-primary">Delete</button> </td>
                                                <td>
                                                    {
                                                        text.suspend ?
                                                            <button onClick={() => this.suspend(text)} type="button" class="btn btn-success">Allow</button> :
                                                            <button onClick={() => this.suspend(text)} type="button" class="btn btn-danger">Suspend</button>
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
export default Users
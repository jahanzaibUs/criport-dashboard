import React,{Component} from "react";
import { Router as BrowserRouter, Route, Link } from "react-router-dom";


import './index.css';
import '../Root/App.css';
import DashboardAd from "../../container/dashboard";
import Users1 from '../../container/user';
import Missing1 from '../../container/missing';
import ComplainRecord1 from '../../components/Complain/index';
import SigninCon from "../../container/Signin";
import history from "../../history/history"

function Index() {
  return <DashboardAd />;
}


function Signin(){
  return <SigninCon />
}
function Users() {
  return <Users1 />;
}
function MissingReport() {
  return <Missing1 />
}
function ComplainRecord() {
  return <ComplainRecord1 />
}

class AppRouter extends Component{
  componentWillMount(){
    let user=localStorage.getItem("user");
    JSON.parse(user);
    if(user){
      history.push("/home")
    }
  }
  
  render(){

    return (
      <BrowserRouter history={history}>
        <div>

        <Route  path="/" exact component={Signin} />
        <Route path="/home" component={Index} />
        <Route path="/Users" component={Users} />
        {/* <Route path="/CrimeReport/" component={CrimeReport} /> */}
        <Route path="/MissingReport" component={MissingReport} />
        <Route path="/ComplainRecord" component={ComplainRecord} />
      </div>
    </BrowserRouter>
  );
}
}

export default AppRouter;

import  typesOfAction from  '../constant/constant'
import axios from  "axios";
import jwt_decode from 'jwt-decode';
import history from "../../history/history"

export function signin(data){
    return  dispatch => {
        console.log(data);
        // dispatch({type:typesOfAction.signinloader,payload:true});
        dispatch({
            type:typesOfAction.signinloader,
            payload:true
        })
        axios.post('https://criportserver.herokuapp.com/login',{data}).then((res)=>{
            console.log(res.data.message);
            dispatch({
                type:typesOfAction.userResult,
                payload:res.data.message.toString()
            })
            if(res.data.token){
                let jwt = jwt_decode(res.data.token);
                
                if(jwt.admin === true){

                    dispatch({
                        type: typesOfAction.users,
                        payload:  jwt
                    })
                    localStorage.setItem("user", JSON.stringify(jwt));
                    history.push("/home")
                }else{
                    dispatch({
                        type:typesOfAction.userResult,
                        payload:"Only Admin Can Access"
                    })
                }

            }
             dispatch({type:typesOfAction.signinloader,payload:false})
        }).catch(err =>{
            console.log(err.message);
           
        })
        // dispatch({
        //     type:typesOfAction.users
        // })
    }
}

export function crimedata(){
    return dispatch =>{
        axios.get("https://criportserver.herokuapp.com/allcrime").then(data  => {
            console.log(data);
            dispatch({
                type:typesOfAction.alldata,
                payload:data.data.details
            })
        })
    }
}

export function allusers(){
    return dispatch => {
        axios.get("https://criportserver.herokuapp.com/alluser").then(data  => {
           
            dispatch({
                type:typesOfAction.alluser,
                payload:data.data.users
            })
        })
    }
}

export function suspend(data){
    return dispatch => {
        console.log(data)
        axios.put(`https://criportserver.herokuapp.com/suspend/${data.uid}`,data).then(dataa  => {
           
            dispatch({
                type:typesOfAction.alluser,
                payload:dataa.data.users
            })
        })
    }
}

export function allmissing(){
    return dispatch => {
        axios.get("https://criportserver.herokuapp.com/getmissingpeople").then(data  => {
           
            dispatch({
                type:typesOfAction.missing,
                payload:data.data.missing
            })
        })
    }
}
export function allowmissing(data){
    return dispatch => {
        console.log(data)
        axios.put(`https://criportserver.herokuapp.com/approve/${data.uid}`,data).then(dataa  => {
           console.log(dataa)
            dispatch({
                type:typesOfAction.missing,
                payload:dataa.data.missing
            })
        })
    }
}

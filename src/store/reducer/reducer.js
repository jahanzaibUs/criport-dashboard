import typesOfAction from '../constant/constant';

const initalState={
    userAuth: {},
    userResult: "",
    loader: false,
    alldata :[]
}



export default (state= initalState , action) =>{
    switch(action.type){
        case typesOfAction.users:
        return({
            ...state,
            userAuth: action.payload
        })
        case typesOfAction.userResult:
            return({
                ...state,
                userResult: action.payload
            })
    
            case typesOfAction.signinloader:
            return({
                ...state,
                loader: action.payload
            })
            
            case typesOfAction.alldata:
            return({
                ...state,
                alldata: action.payload
            })
    
        default:
    }
   
    return state
}

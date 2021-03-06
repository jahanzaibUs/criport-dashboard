import typesOfAction from '../constant/constant';

const initalState={
    userAuth: {},
    userResult: "",
    loader: false,
    alldata :[],
    alluser: [],
    missingpeople: []
}



export default (state= initalState , action) =>{
    switch(action.type){

        case typesOfAction.missing:
            return({
                ...state,
                missingpeople: action.payload
            })
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

            case typesOfAction.alluser:
                return({
                    ...state,
                    alluser: action.payload
                })
    
        default:
    }
   
    return state
}

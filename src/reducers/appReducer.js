const jobReducer = (state = {}, action)=> {
    switch (action.type) {
        case 'GET_JOBS':{

            return state = {
              //  ...state,
                data: action.payload
                
            };
        }
        case 'GET_ALL_USER':{
            return state = {
                ...state,
                users: action.payload
                
            };
        }
        
        
        case 'POST_JOB':{
           
            return state = {
                ...state
               
                
            };
        }
         
        case 'CHANGE_JOB_STATUS':{
           
            return state = {
                ...state
             
                
            };
        }
        case 'UPDATE_JOB':{
           
            return state = {
                ...state
               
                
            };
        }
        case 'APPLY_JOB':{
            
             return state = {
                 ...state
                
                 
             };
         }

        
         case 'APPLIED_JOB':{
           
            return state = {
                ...state,
                applied: action.payload
                
            };
        }
        case 'APPLIED_USERS':{
          
            return state = {
                ...state,
                appliedUsers: action.payload
                
            };
        }
        
        case 'APPLIED_USERS_List':{
           
            return state = {
                ...state,
                userList: action.payload
                
            };
        }
        default:
            return state;

    }
}
export default jobReducer;
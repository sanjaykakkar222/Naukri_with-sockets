const jobReducer = (state = {}, action)=> {
    switch (action.type) {
       
        case 'GET_USER':{
            return state = {
                ...state,
                data: action.payload
                
            };
        }
        case 'POST_USER':{
            return state = {
                ...state,
                data: action.payload
                
            };
        }
      
        default:
            return state;

    }
}
export default jobReducer;
import {createStore, combineReducers,applyMiddleware} from 'redux';
import Jobs from './reducers/appReducer';
import SignIn from './reducers/signInReducser'
import thunk from 'redux-thunk';


export default createStore(combineReducers({
    fetchJobs:Jobs,
    user:SignIn
}),applyMiddleware(thunk));
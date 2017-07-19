import { DONOR_REGISTRATION } from '../actions/actions'
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'

const addDonor = (action) =>{
    return {
        state :action.payload
    }
}
const donors =handleActions({
    DONOR_REGISTRATION: (state = [], action) => {
        let donors = null;

        donors = [...state, addDonor(action)]
        console.log("hjkghzfgkd")
        console.log(donors)
        console.log("hjkghzfgkd")
        return donors;

    }
},{})
const allReducers=combineReducers({donors:donors,
    routing: routerReducer,
    form : formReducer});
export default allReducers
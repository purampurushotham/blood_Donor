import { DONOR_REGISTRATION } from '../actions/actions'
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import {reducer as formReducer} from 'redux-form'

const addDonor = (action) =>{
    return {
        data :action.payload
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

    },
    SEARCH_DONOR : (state,action) => {
        console.log("search")
        console.log(state)
        console.log("search")
        return state
    }
},[])
const allReducers=combineReducers({donors:donors,
    form : formReducer});
export default allReducers
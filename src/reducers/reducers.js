import { DONOR_REGISTRATION } from '../actions/actions'
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
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
export default combineReducers({donors:donors});
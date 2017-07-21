import { createAction } from 'redux-actions'
export const DONOR_REGISTRATION= createAction('DONOR_REGISTRATION') ;
export const SEARCH_DONOR = createAction('SEARCH_DONOR')
export const FIND_DONORS = createAction('FIND_DONORS')

export function showInfo(data) {
    return (dispatch,getState) =>{
        console.log("show Info")
        console.log(data)
        console.log("show Info")
        dispatch(FIND_DONORS())

    }

}
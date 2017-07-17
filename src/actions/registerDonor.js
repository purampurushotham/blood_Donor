import { DONOR_REGISTRATION } from './actions'

export const  DONOR_REGISTRATION =  (state) => {

    const action={
        type : DONOR_REGISTRATION,
        state
    }
    console.log('donors',action)
    return action;
}
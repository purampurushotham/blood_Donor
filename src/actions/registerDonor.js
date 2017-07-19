import { DONOR_REGISTRATION } from './actions'

const initialState={
    firstName:'purushotham',
    lastName:'puram',
    email:'puram@g.com',
    phone:'8745124587',
    dob:'08/12/1993',
    occupation:'employee',
    martial_status:'unmarried'
}
export const  sampleData =  (state=initialState) => {

    const action={
        type : DONOR_REGISTRATION,
        state
    }
    console.log('donors',action)
    return action;
}
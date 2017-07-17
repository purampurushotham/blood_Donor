import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { Radio,Col,Panel,Button,Form,FormControl,FormGroup, ControlLabel } from 'react-bootstrap'
import autobind from 'autobind-decorator'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DONOR_REGISTRATION } from '../actions/actions'

export const fields=[ 'firstName', 'lastName', 'occupation','martial_status','dob','email','phone']

@autobind
class RegisterDonor extends Component {
    DONOR_REGISTRATION () {
        console.log(this.props.values)
        let {dispatch} =this.props
        dispatch(DONOR_REGISTRATION(this.props.values))
    }
    render () {
        console.log(this)
        let {
            fields: { firstName, lastName, occupation,martial_status,dob,email,phone },
            resetForm,
            submitting,
            pristine, reset
        } = this.props
        return (
            <Form horizontal>
                <FormGroup controlId="firstName">
                    <Col componentClass={ControlLabel} sm={3}>
                        First Name
                    </Col>
                    <Col sm={7}>
                        <FormControl type="text" placeholder="FirstName" {...firstName} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Last Name
                    </Col>
                    <Col sm={7}>
                        <FormControl type="text" placeholder="last name" {...lastName} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Occupation
                    </Col>
                    <Col sm={7}>
                        <FormControl type="text" placeholder="Occupation" {...occupation} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={3}>
                        Dob
                    </Col>
                    <Col sm={7}>
                        <FormControl type="date" placeholder="Date of Birth" {...dob} />
                    </Col>
                </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>Martial Status</Col>
                    <Radio name="radioGroup" inline {...martial_status }
                    checked={martial_status.value === 'married'}>
                        Married
                    </Radio>
                        {' '}
                        <Radio name="radioGroup" inline>
                        Unmarried
                        </Radio>
                </FormGroup>
                <FormGroup>
                    <br />
                    <hr />
                </FormGroup>
                <div>
                    <Panel header= 'Personal details' bsStyle="primary" className="text-center" ></Panel>
                    <hr />
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>
                            Email
                        </Col>
                        <Col sm={7}>
                            <FormControl type="email" placeholder="last name" {...email} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>
                            Phone
                        </Col>
                        <Col sm={7}>
                            <FormControl type="text" placeholder="Phone" {...phone} />
                        </Col>
                    </FormGroup>

                </div>
                <div>
                    <br />
                    <hr />
                </div>
                <div>
                    <Panel header= 'Emergency Contact Details' bsStyle="success" className="text-center" ></Panel>
                    <hr />
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>
                            Email
                        </Col>
                        <Col sm={7}>
                            <FormControl type="email" placeholder="last name" {...email} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>
                            Phone
                        </Col>
                        <Col sm={7}>
                            <FormControl type="text" placeholder="Phone" {...phone} />
                        </Col>
                    </FormGroup>

                </div>
                <br />
                <FormGroup>
                    <Col smOffset={2} sm={6}>
                        <Button disabled={pristine || submitting} onClick={ () =>  this.DONOR_REGISTRATION()}>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

RegisterDonor.propTypes = {
    fields: PropTypes.object.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
}
function getInitFields() {
    let initValues = {
        firstName : 'puram',
        lastName : 'purushotham',
        email: 'puram.purushotham@india.semanticbits.com',
        dob: '08/12/1993',
        occupation:'employee',
        phone:'89744565841',
        martial_status:'UnMarried'
    }
    return initValues;
}
export default reduxForm({
    form: 'RegisterDonor',
    fields,
    initialValues : getInitFields
})(RegisterDonor)

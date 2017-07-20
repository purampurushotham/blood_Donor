import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { Radio,Col,Panel,Button,Form,FormControl,FormGroup, ControlLabel ,Grid, Row, } from 'react-bootstrap'
import autobind from 'autobind-decorator'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DONOR_REGISTRATION } from '../actions/actions'

export const fields=[ 'firstName', 'lastName', 'occupation','martial_status','dob','email','phone']

@autobind
class RegisterDonor extends Component {

    componentWillMount() {

    }
    DONOR_REGISTRATION () {
        console.log(this.props)
        let {dispatch} =this.props
        dispatch(DONOR_REGISTRATION(this.props.values))
    }
    render () {
        const title=(
            <h3 className="text-center">Donor registration</h3>
        )
        let {
            fields: { firstName, lastName, occupation,martial_status,dob,email,phone },
            resetForm,
            submitting,
            pristine, reset
        } = this.props
        return (
            <Grid>
                <Row className="show-grid">

                    <Panel header={title} bsStyle="success">
                        <Form horizontal>
                            <Col md={12}>
                                <Col md={6}>
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
                                            Occupation
                                        </Col>
                                        <Col sm={7}>
                                            <FormControl type="text" placeholder="Occupation" {...occupation} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col componentClass={ControlLabel} sm={3}>Martial Status</Col>
                                        <Radio name="radioGroup" inline {...martial_status }>
                                            Married
                                        </Radio>
                                        {' '}
                                        <Radio name="radioGroup" inline>
                                            Unmarried
                                        </Radio>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
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
                                            Dob
                                        </Col>
                                        <Col sm={7}>
                                            <FormControl type="date" placeholder="Date of Birth" {...dob} />
                                        </Col>
                                    </FormGroup>
                                </Col>
                            </Col>
                            <FormGroup>
                                <br />
                                <hr />
                            </FormGroup>
                            <Col md={12}>
                                <Col md={6}>
                                    <hr />
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
                                </Col>

                                <Col md={6}>
                                    <hr />
                                    <Panel header= 'Emergency Contact Details' bsStyle="danger" className="text-center" ></Panel>
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

                                </Col>
                            </Col>
                            <br />
                            <FormGroup>
                                <Col md={6}>
                                    <Button onClick={ () =>  this.DONOR_REGISTRATION()}>
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Panel>
                </Row>
            </Grid>
        )
    }
}
RegisterDonor.defaultProps ={
    fields : {
        firstName:'purushotham',
        lastName: 'puram',
        email: 'puram@gmai.com',
        dob: '08/12/1993',
        phone:'89778865984',
        occupation:'emplyee',
        martial_status:'unMarried'
    }
}
export default reduxForm({
    form: 'RegisterDonor',
    fields
})(RegisterDonor)

import React, {Component, PropTypes} from "react";
import {reduxForm} from "redux-form";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Panel, Row} from "react-bootstrap";
import autobind from "autobind-decorator";
import {SEARCH_DONOR} from "../actions/actions";
export const fields=[ 'bloodGroup', 'city']
@autobind
class SearchDonors extends Component {
    componentWillMount() {
        console.log('handle')
        let { dispatch } = this.props
        dispatch(SEARCH_DONOR())
    }

    handleSearch () {
        let {bloodGroup , city, dispatch } = this.props
        dispatch ()
    }
    render() {
        const title= "Search Donors"
        let {
            fields: { bloodGroup, city},
            resetForm,
            submitting,
            pristine, reset
        } = this.props
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Panel header={title} bsStyle="success">
                            <Form horizontal>
                                <Col md={4}>
                                </Col>
                                <Col md={6}>
                                    <FormGroup controlId="firstName">
                                        <Col componentClass={ControlLabel} sm={3}>
                                            Blood Group
                                        </Col>
                                        <Col sm={7}>
                                            <FormControl type="text" placeholder="bloodGroup" {...bloodGroup} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col componentClass={ControlLabel} sm={3}>
                                            City
                                        </Col>
                                        <Col sm={7}>
                                            <FormControl type="text" placeholder="City" {...city} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button bsStyle = "info" onClick= {() => this.handleSearch () }>Search</Button>                                </FormGroup>
                                </Col>
                            </Form>
                        </Panel>
                    </Row>
                </Grid>
                <br />
                <hr />
                <h1>hkhjkdhskfhdksk</h1>
            </div>



        )
    }

}
SearchDonors.propTypes = {
    dispatch: PropTypes.func.isRequired,
    searchResults: PropTypes.array

}
function getInitFields() {
    let initialValues ={
        bloodGroup : 'b+ve',
        city : 'hyderabad'
    }
}
function selectProps (state) {
    return {
        searchResults: state.allReducers.donors
    }
}
export default reduxForm({
        form : 'SearchDonors',
        fields,
        intialValues : getInitFields,
    },
    selectProps
)(SearchDonors)


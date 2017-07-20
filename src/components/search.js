import React, {Component, PropTypes} from "react";
import {reduxForm} from "redux-form";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Panel, Row} from "react-bootstrap";
import autobind from "autobind-decorator";
import {SEARCH_DONOR} from "../actions/actions";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
export const fields=[ 'bloodGroup', 'city']
@autobind
class SearchDonors extends Component {
    componentWillMount() {
        console.log('handle')
        let { dispatch } = this.props
        dispatch(SEARCH_DONOR())
    }
    handleSearch () {

    }
    render() {
        const title= "Search Donors"
        let {
            fields: { bloodGroup, city},
            searchResults,
            resetForm,
            submitting,
            pristine, reset
        } = this.props
        console.log("searchResults")
        console.log(searchResults)
        console.log("searchResults")
        const options = {
            page: 2,  // which page you want to show as default
            sizePerPageList: [ {
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: searchResults.length
            } ], // you can change the dropdown list for size per page
            sizePerPage: 5,  // which size per page you want to locate as default
            pageStartIndex: 0, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            paginationPosition: 'top'  // default is bottom, top and both is all available
            // hideSizePerPage: true > You can hide the dropdown for sizePerPage
            // alwaysShowAllBtns: true // Always show next and previous button
            // withFirstAndLast: false > Hide the going to First and Last page button
        };
        const selectRow = {
            mode: 'checkbox',  // multi select
            clickToSelect: true
        };

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
                <Grid>
                    <Row className="show-grid">
                        <Col md={12}>
                            <BootstrapTable data={ searchResults }  pagination={ true } options={ options }  selectRow={ selectRow } bordered={ false }>
                                <TableHeaderColumn dataField='firstName' isKey={true} >First Name</TableHeaderColumn>
                                <TableHeaderColumn dataField='lastName'>LastName</TableHeaderColumn>
                            </BootstrapTable>
                        </Col>
                    </Row>
                </Grid>
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
    console.log()
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


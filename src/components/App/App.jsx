import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import routes from '../../containers/routes'
import Root from '../../containers/root'
import { Grid, Row, Col, Panel} from 'react-bootstrap'
import Header from '../header'
import RegisterDonor from '../register'
export default class App extends Component {
    /*
     * Component render()
     * see: https://facebook.github.io/react/docs/reusable-components.html#es6-classes
     */
    render() {
        const title=(
            <h3 className="text-center">Donor registration</h3>
        )
        return (
            <div>
                <Header/>
                <Grid>
                    <Row className="show-grid">
                        <Col md={4}></Col>
                        <Col md={6}>
                            <Panel header={title} bsStyle="success">
                            <RegisterDonor />
                            </Panel>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import routes from '../../containers/routes'
import autobind from 'autobind-decorator'
import { Grid, Row, Col, Panel} from 'react-bootstrap'
import Header from '../header'
import RegisterDonor from '../register'
@autobind
export default class App extends Component {
    /*
     * Component render()
     * see: https://facebook.github.io/react/docs/reusable-components.html#es6-classes
     */
    render() {
        return (
            <Router history={this.props.history}>
                {routes}
            </Router>
        );
    }

}
App.propTypes = {
    history: PropTypes.object.isRequired
}

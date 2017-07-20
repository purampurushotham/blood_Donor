import 'babel-polyfill'
import React from 'react';
import {createStore } from 'redux'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import configureStore from './components/store'
import {  sampleData } from  './actions/registerDonor'
import { App } from './components/App';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import  allReducers  from './reducers/reducers'
import './style.less';
const store= configureStore()
let appRender = () =>{
    const history = syncHistoryWithStore(browserHistory, store);
    render(
        <Provider store={store}>
            <App history={history}/>
        </Provider>, document.getElementById('container'));

}
appRender()


import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import  donors  from '../reducers/reducers'
const reducer = combineReducers({
    form: reduxFormReducer,
    donors
    // mounted under "form"
});
const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);
export default store;

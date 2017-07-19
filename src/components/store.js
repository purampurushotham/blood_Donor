import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { browserHistory } from 'react-router'
import { routerMiddleware ,push } from 'react-router-redux'
import thunk from 'redux-thunk'

import   donors   from '../reducers/reducers'
export default function configureStore(initialState={}){
    const reducer = combineReducers({
        form: reduxFormReducer,
        donors,
        // mounted under "form"
    });
    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(thunk, routerMiddleware(browserHistory)),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/reducers', () => {
            const nextRootReducer = require('../reducers/reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    store.dispatch(push('/'))
    return store
}
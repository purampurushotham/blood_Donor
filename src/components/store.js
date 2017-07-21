import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { browserHistory } from 'react-router'
import { routerReducer } from 'react-router-redux'
import { routerMiddleware ,push } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import donorsReducer from '../reducers/reducers'
import   allReducers   from '../reducers/reducers'

export default function configureStore(initialState={}){
    const logger = createLogger({
        predicate: (getState, action) => {
            return action
        }
    })

    console.log("initialState")
    console.log(initialState)
    console.log("initialState")
    const reducer = combineReducers({
        form: reduxFormReducer,
        allReducers,
        routing: routerReducer
        // mounted under "form"
    });
    const router = routerMiddleware(browserHistory)
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(thunk, logger, router),
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
    console.log("store")
    console.log(store)
    console.log("store")
    return store
    /*

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
    return store*/
}
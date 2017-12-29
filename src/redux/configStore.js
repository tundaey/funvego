import { createStore, applyMiddleware } from 'redux'
import app from './modules'
import thunk from 'redux-thunk'

export default function configStore(){
    let store = createStore(app, applyMiddleware(thunk))
    console.log('store', store.getState())
    return store
}
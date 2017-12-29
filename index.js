import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';

import { Provider } from 'react-redux'
import configStore from './src/redux/configStore'

const store = configStore()
const ReduxApp = ()=> (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent('RNFirebaseStarter', () => ReduxApp);

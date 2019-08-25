import React from 'react'
import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native';
import App from './src/App'
import {name as appName} from './app.json';

import storeConfig from './src/store/storeConfig'

import axios from 'axios'
axios.defaults.baseURL = 'https://lambe-d1aa7.firebaseio.com/'

const store = storeConfig()
const redux = () => (
    <Provider store={store}>
        <App />
    </Provider>

)


AppRegistry.registerComponent(appName, () => redux);

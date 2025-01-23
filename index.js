/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Register from './Components/Registration';
import Login from './Components/Login';
import start from './Components/Start';
AppRegistry.registerComponent(appName, () => start);

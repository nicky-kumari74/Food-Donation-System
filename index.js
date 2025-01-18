/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import register from './Components/Registration';
AppRegistry.registerComponent(appName, () => register);

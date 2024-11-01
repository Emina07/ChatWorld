import { AppRegistry } from 'react-native';
import App from './App'; // Assuming you have an App.js file in the same directory
import { name as appName } from './app.json'; // Importing the app name from app.json

// Register the main application component
AppRegistry.registerComponent(appName, () => App);

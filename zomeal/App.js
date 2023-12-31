import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/navigation/AppNavigator';
import {name as appName} from './app.json'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Routes/>
  )
}

import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './src/navigation/AppNavigator';
import { NativeBaseProvider } from 'native-base';
import {App as Appname} from '../zomeal/app.json'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <AppNavigator/>
    </NativeBaseProvider>
  )
}
AppRegistry.registerComponent(Appname, () => App);

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routes/Routes';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Routes/>
  )
}

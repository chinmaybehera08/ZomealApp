import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../src/pages/LoginScreen';
import SignUpScreen from '../src/pages/SignUpScreen';
import SubMainScreen from '../src/pages/SubMainScreen';
import ForgetPassword from '../src/pages/ForgetPassword';
import PincodeScreen from '../src/pages/PincodeScreen';
import Dashboard from '../src/pages/Dashboard';
import TermsCondition from '../src/pages/TermsCondition';
import Menu from '../src/pages/Menu';

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
 <NavigationContainer>
  <Stack.Navigator>
  
    <Stack.Screen 
    name='Login'
    component={LoginScreen}
    />

  </Stack.Navigator>
 </NavigationContainer>
    
  )
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
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
    name="SubMainScreen"
    component={SubMainScreen}
    options={{headerShown:false}}
    
    />
    <Stack.Screen 
    name='Signup'
    component={SignUpScreen}
    
    />
    <Stack.Screen 
    name='Login'
    component={LoginScreen}
    />
     <Stack.Screen 
    name='forgetpassword'
    component={ForgetPassword}
    />
    <Stack.Screen
    name='pincode'
    component={PincodeScreen}/>
    <Stack.Screen
    name='dashboard'
    component={Dashboard}/>
     <Stack.Screen
    name='termsCondition'
    component={TermsCondition}/>
    <Stack.Screen
    name='menu'
    component={Menu}/>
  </Stack.Navigator>
 </NavigationContainer>
    
  )
}

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from '../screens/LoginScreen';
// import SignUpScreen from '../screens/SignUpScreen';
// import SubMainScreen from '../screens/SubMainScreen';
// import ForgetPassword from '../screens/ForgetPassword';
// import PincodeScreen from '../screens/PincodeScreen';
// import Dashboard from '../screens/Dashboard';
// import TermsCondition from '../screens/TermsCondition';
// import Menu from '../screens/Menu';
// import { Provider } from 'react-redux';
// import store from '../components/store'
// import {getReactNativePersistance} from 'firebase/auth'
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import { FIREBASE_APP } from '../services/authService';
// import { IconButton } from 'react-native-paper';
// import { mdiMenu } from '@mdi/js';


import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FIREBASE_AUTH, auth } from '../services/authService'; // Import your Firebase authentication service
import SubMainScreen from '../screens/SubMainScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Menu from '../screens/Menu';
import ForgetPassword from '../screens/ForgetPassword';
import PincodeScreen from '../screens/PincodeScreen';
import Dashboard from '../screens/Dashboard';
import TermsCondition from '../screens/TermsCondition';
import PaymentGateway from '../screens/PaymentGateway';
import PhoneAuth from '../screens/PhoneAuth';
import Selection from '../screens/Selection'
import VerfiyCodeScreen from '../screens/VerfiyCodeScreen';
import { NativeBaseProvider } from 'native-base';
import AddAddress from '../screens/AddAddress';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup the subscription when the component unmounts
    return unsubscribe;
  }, []);

  return (
    <NativeBaseProvider>
<NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <>
            
              <Stack.Screen name="menu" component={Menu} />
              <Stack.Screen name="pincode" component={PincodeScreen} />
            </>
          ) : (
            <>
             <Stack.Screen name="login" component={LoginScreen} />
              <Stack.Screen name='OTP Verification' component={VerfiyCodeScreen}/>
              <Stack.Screen name='Add Address' component={AddAddress}/>
              <Stack.Screen name='selection' component={Selection}/>
              <Stack.Screen name="phoneauth" component={PhoneAuth} options={{headerShown:false}}/>
              <Stack.Screen name="subMainScreen" component={SubMainScreen} options={{ headerShown: false }} />
             
              <Stack.Screen name="forgetpassword" component={ForgetPassword} />
              <Stack.Screen name="dashboard" component={Dashboard} options={{ headerBackTitle: true, headerShown:false }} />
              <Stack.Screen name='paymentgateway' component={PaymentGateway} />
              <Stack.Screen name="termsCondition" component={TermsCondition} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
      
  );
}

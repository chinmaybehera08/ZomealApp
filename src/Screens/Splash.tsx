import React, { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Login from './Login';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";



const Splash = () => {

  const navigation = useNavigation();
  
  useEffect(()=>{
    setTimeout (() => {
      navigation.navigate('Login')
    }, 3000)
  }, [])
  return (
    <View>
    <Image source={require('../Images/logo.png')} />
    </View>
  )
}

export default Splash;



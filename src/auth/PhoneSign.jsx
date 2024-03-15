import React, { useState, useEffect,useRef } from "react";
import { View, Text, TouchableOpacity, TextInput,Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import auth from '@react-native-firebase/auth';
import Verifycode from "../screens/Verifycode"
import Loginscreen from "../screens/Loginscreen";
import { useNavigation } from "@react-navigation/native";



const PhoneSignIn = () => {
  const navigation = useNavigation()
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [number, setNumber] = useState('');
  const inputRefs = useRef([]);
  const [joinedCode, setJoinedCode] = useState('')
  const [verificationId, setVerificationId] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(()=>{
    if(inputRefs.current[0]){
      inputRefs.current[0].focus()
    }
    },[])




  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    if (user) {
      // Handle successful login here
      navigation.navigate('Dashboard')
    }else{
     
    }
  }

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber,true);
    setConfirm(confirmation);
    console.log(confirmation);
    
  }

  async function confirmCode() {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      const verificationCode = code; // Store the current value of code
      await confirm.confirm(verificationCode); // Use the stored value
      console.log('Good job! Code confirmed successfully.');
     onAuthStateChanged;
    } catch (error) {
      console.log('Error confirming code:', error.message);
      // Handle the error here, such as displaying an error message to the user
      console.log('code',error.verificationCode)
    }
  }
  
  function changeText(number) {
    setNumber(number);
  }
  function handleNumberChange(){
    const countryCode = '+91'
    signInWithPhoneNumber(countryCode + number)
    console.log(countryCode + number)
  }
 

  if (!confirm) {
    return (
      <Loginscreen value={number} handleChangeText={changeText} handlePress={handleNumberChange} navigation={navigation} />

      );
  }else{
    return (
    
      <Verifycode value={code} onChangeText={(text)=>setCode(text)} onFilled={(text)=>setCode(text)} confirmEvent={()=>confirmCode()} keyboardType={'numeric'}/>
  
    );
  }

 
}

export default PhoneSignIn;

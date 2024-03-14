import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneNumberSignIn = () => {
  const [confirm, setConfirm] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.error('Error signing in with phone number:', error);
    }
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {confirm ? (
        <>
          <TextInput
            style={{ marginBottom: 10, borderWidth: 1, padding: 8, width: 200 }}
            placeholder="Enter verification code"
            onChangeText={text => setCode(text)}
            value={code}
          />
          <Button title="Confirm Code" onPress={confirmCode} />
        </>
      ) : (
        <>
          <TextInput
            style={{ marginBottom: 10, borderWidth: 1, padding: 8, width: 200 }}
            placeholder="Enter phone number"
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
          />
          <Button
            title="Phone Number Sign In"
            onPress={signInWithPhoneNumber}
          />
        </>
      )}
    </View>
  );
};

export default PhoneNumberSignIn;

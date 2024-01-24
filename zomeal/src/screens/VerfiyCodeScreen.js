import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from 'firebase/auth'
import { FIREBASE_AUTH } from '../services/authService';

const VerifyCodeScreen = () => {
  const [user, setUser] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  
  const onAuthStateChanged = async userAuth => {
    if (!userAuth) {
      return;
    }
    if (userAuth) {
      console.log(userAuth);
      setUser(userAuth);
    }

    return () => userReference();
  };
  useEffect(() => {
    const subscriber = FIREBASE_AUTH.onAuthStateChanged(onAuthStateChanged);
    return () => {
      subscriber;
    };
  }, []);

  const signInWithMobileNumber = async () => {
    const confirmation = await FIREBASE_AUTH.signInWithMobileNumber(mobile);
    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  const signOut = async () => {
    FIREBASE_AUTH.signOut()

    setUser(null);

    return () => userReference();
  };

  return (
    <SafeAreaView style={{alignItems: 'center', flex: 1, marginTop: 100}}>
      <View style={{margin: 10}}>
        <Text>Mobile Sign In Tutorial</Text>
      </View>

      <View style={{margin: 10}}>
        {user === null && (
          <>
            <TextInput
              value={mobile}
              onChangeText={e => setMobile(e)}
              placeholder="mobile"
              style={{
                borderWidth: 1,
                margin: 10,
                padding: 10,
                width: 200,
              }}></TextInput>
            {!confirm ? (
              <>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    margin: 10,
                    padding: 10,
                    alignItems: 'center',
                  }}
                  onPress={() => signInWithMobileNumber()}>
                  <Text>Get Code</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TextInput
                  value={code}
                  onChangeText={e => setCode(e)}
                  placeholder="Code"
                  style={{
                    borderWidth: 1,
                    margin: 10,
                    padding: 10,
                    width: 200,
                  }}></TextInput>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    margin: 10,
                    padding: 10,
                    alignItems: 'center',
                  }}
                  onPress={() => confirmCode()}>
                  <Text>Confirm Code</Text>
                </TouchableOpacity>
              </>
            )}
          </>
        )}
      </View>
      {user !== null && (
        <View style={{margin: 10}}>
          <Text style={{margin: 10}}>{user.phoneNumber}</Text>
          <TouchableOpacity onPress={signOut} style={{alignItems: 'center'}}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default VerifyCodeScreen;
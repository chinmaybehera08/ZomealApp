import { View, Text, StyleSheet, TextInput, TouchableOpacity , Image, Button} from 'react-native'
import React, {useState, useRef} from 'react'
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';



const Login = ({navigation}) => {

GoogleSignin.configure({
  webClientId:"422976100777-o6vi0is04elp5b3c9tjj6pdofj6r32h9.apps.googleusercontent.com",
});

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

        return (
          <Button
            title="Google Sign-In"
            onPress={() => onGoogleButtonPress()}
          />
        );
    // const [confirm, setConfirm] = useState(null);
    // const [code, setCode] = useState('');
    // const [mobile, setMobile]= useState ('');
    // const signInWithPhoneNumber = async () => {
    //   const confirmation = await auth().signInWithPhoneNumber('+91' + mobile);
    // };
    //   const [mobile, setMobile] = useState('')
    //   const [code, setCode] = useState('');
    //   const [confirm, setConfirm] = useState('');


    // async function signInWithPhoneNumber(phoneNumber) {
    //   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    //   setConfirm(confirmation);
    // }
  
    // async function confirmCode() {
    //   try {
    //     await confirm.confirm(code);
    //   } catch (error) {
    //     console.log('Invalid code.');
    //   }
    // }

    // return (
    //   <View style={styles.container}>
    //     <View style={styles.banner}>
    //       <Image source={require('../Images/banner.png')} style={styles.logo} />
    //       <Text style={styles.welcometxt}> Welcome !</Text>
    //       <Text style={styles.signintxt}>Please enter your phone to Signin </Text>
    //       <TextInput
    //         style={styles.phoneinput}
    //         placeholder="mobile number"
    //         keyboardType={'number-pad'}
    //         onChangeText={(value)=>setMobile(value)}
    //       />
       
    //       <TouchableOpacity style={styles.loginButton} onPress={()=>{
    //         signInWithPhoneNumber();
    //       }}>
    //         <Text style={styles.logintxt}> GET OTP</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} >
    //         <Text style={styles.skip}> Skip</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>

    // );
    
  
}

export default Login;

// const styles = StyleSheet.create ({
//   container : {
//     flex: 1,
//   },
//   logo : {
//     width: '100%',
//     height: '35%'
//   },
//   welcometxt: {
//     marginTop: 60,
//     fontSize: 25,
//     fontWeight: 'bold',
//     alignSelf: 'center',
//     color: 'black',
//     paddingLeft: 20,
//   },
//   signintxt: {
//     marginTop: 35,
//     fontSize: 15,
//     alignSelf: 'center',
//     color: 'black',
//     paddingLeft: 20,

//   },
//   phoneinput: {
//     borderWidth: 1,
//     borderRadius: 30,
//     height: 50,
//     width: '80%',
//     alignSelf: 'center',
//     marginTop: 30,
//   },

//   loginButton: {

//     borderWidth: 1,
//     borderRadius: 30,
//     height: 50,
//     width: '80%',
//     alignSelf: 'center',
//     backgroundColor: '#ff7f50',
//     marginTop: 30,
//   },
//   logintxt: {
//     alignSelf: 'center',
//     marginTop: 12,
//     fontSize: 20,
//   },
//   skip: {
//     fontSize: 20,
//     marginTop: 20,
//     color: 'black'

//   }
// })
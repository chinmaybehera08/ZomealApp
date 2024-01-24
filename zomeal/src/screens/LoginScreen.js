// import Styling from '../../styles'
// import { useState } from 'react'
// import { FIREBASE_AUTH } from '../services/authService'
// import  { signInWithEmailAndPassword ,connectAuthEmulator,getAuth } from 'firebase/auth'
// import { Box, Center, FormControl, Image, NativeBaseProvider } from 'native-base'
// import logo from '../assets/adaptive-icon.png'




// const LoginScreen = ({ navigation }) => {
//   // const [checked, setChecked] = useState(false);
//   // const [username, setUsername] = useState('');
//   // const [userpassword, setUserPassword] = useState('');
//   // const [loading, setLoading] = useState(false);

//   // const handledTextChange = (username) => {
//   //   setUsername(username);
//   // };

//   // const handledPasswordChange = (userpassword) => {
//   //   setUserPassword(userpassword);
//   // };

//   const signin = async () => {
//     try {
//       setLoading(true);
//       const userCredentials = await signInWithEmailAndPassword(FIREBASE_AUTH, username, userpassword);
//       console.log(userCredentials.user);
//       navigation.navigate('menu')
//       // ToastAndroid.show('Logged in Successfully', ToastAndroid.SHORT);
//     } catch (error) {
//       console.log(error);
//       // ToastAndroid.show('Login failed. Please try again.', ToastAndroid.SHORT);
//     } finally {
//       setLoading(false);
//     }
//   };
 
//   return (
//     <Box>
//       <Box alignItems="center" >
//         <Center>
//           <Image source={{
//             uri:{logo}
//           }} alt="zomeal_logo"/>
//         </Center>
//       </Box>
//       <FormControl isRequired>
//       <Stack mx="4">
//             <FormControl.Label>Phone Number</FormControl.Label>
//             <Input type="number" defaultValue="12345" placeholder="Enter your phone number" />
//             <FormControl.HelperText>
//               Please mention your !0 digits phone number
//             </FormControl.HelperText>
//             <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
//               The Phone number should be of 10 digits.
//             </FormControl.ErrorMessage>
//           </Stack>
//         </FormControl>
//     </Box>
//   )

// }
// export default ()=>{
//   <NativeBaseProvider>
//     <Center>
//       <LoginScreen/>
//     </Center>
//   </NativeBaseProvider>
// }



import * as React from "react";
import { Box, Text, InputGroup, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, InputLeftAddon } from "native-base";
import {FIREBASE_AUTH} from '../services/authService'
import { signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";




const PhoneAuth = ({navigation}) => {
 
  const [loading, setLoading] = useState(" ")
  const [phoneNumber, setPhoneNumber] = useState(" ")
  const signin = async ({navigation}) => {
    try {
      setLoading(true);
      const userCredentials = await signInWithPhoneNumber(FIREBASE_AUTH, phoneNumber);
      console.log(userCredentials.user);
      navigation.navigate('menu')
      // ToastAndroid.show('Logged in Successfully', ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
      // ToastAndroid.show('Login failed. Please try again.', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };
  const handlePhoneNumberInput =(phoneNumber)=>{
    setPhoneNumber(phoneNumber)
  }

  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Phone Number</FormControl.Label>
            <InputGroup>
            <InputLeftAddon children={'+91'}/>
            <Input w='85%' placeholder='Phone Number'type="numeric" keyboardType="numeric" value={phoneNumber} onChangeText={setPhoneNumber}/>
            </InputGroup>
          </FormControl>
          <Button mt="2" colorScheme="orange" onPress={handlePhoneNumberInput}>
            Send Code
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Sign Up
            </Link>
          </HStack>
        </VStack>
        <HStack alignSelf='center'>
            <Button w='100' variant='outline'></Button>
            <Button w='100' variant='outline'></Button>
            <Button w='100' variant='outline'></Button>
        </HStack>
      </Box>
    </Center>
};

    export default PhoneAuth
import React from 'react'
import { Box,Input,InputGroup,VStack,HStack,Center,Heading,FormControl,Link,Button,Text,NativeBaseProvider, InputLeftAddon,Image } from 'native-base'
import { signInWithPhoneNumber } from 'firebase/auth'
import {FIREBASE_AUTH, FIREBASE_FIRESTORE } from '../services/authService'
import { collection, getDoc } from '@firebase/firestore'


const zomealLogo = '../assets/zomealLogo.jpg'
const signup =  () =>{
  useEffect(()=>{
    try{
      setLoading(true)
    const Credentials = signUserWithEmailAndPassword(FIREBASE_AUTH,emailid,password,cpassword,firstname,middlename,lastname,address,pincode,phoneNumber)
    const firestoreDocument = getDoc(collection(FIREBASE_AUTH,'users'))
    ToastAndroid.show('Congatulations! You have registered successfully', ToastAndroid.SHORT)
    navigation.navigate('pincode')
   }catch(error){
     console.log(error)
     ToastAndroid.show('Registration Failed', ToastAndroid.SHORT)
   }finally{
     setLoading(false)
   }
  },[])
 
} 

const PhoneAuth = () => {
 
  return <Center w="100%">
    <Image width='200' height='100' source={require(zomealLogo)} resizeMode='center' alt='zomealLogo'/>
      <Box safeArea p="2" py="4" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
         Hi, Enter your details to get sign in to your account
        </Heading>

        <VStack space={4} mt="5">
          <FormControl>
            <FormControl.Label>Phone Number</FormControl.Label>
            <InputGroup alignSelf='center'>
            <InputLeftAddon children={'+91'}/>
            <Input fontSize='lg' w='95%' h='55px' keyboardType='numeric'/>
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input w='110%' h='55px' fontSize='lg' alignSelf='center' type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button alignSelf='center' w='110%' h='55px' mt="2" color="#fb923c" rounded='full'>
            Sign in
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
      </Box>
    </Center>;
};
export default ()=>{
 return (
      <NativeBaseProvider>
        <Center flex={1} px="3">
            <PhoneAuth />
        </Center>
      </NativeBaseProvider>
    );

}

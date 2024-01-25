import * as React from "react";
import { Box, Text, InputGroup, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, InputLeftAddon, Image } from "native-base";
import { FIREBASE_AUTH } from '../services/authService'
import Selection from '../screens/Selection'
import SignupScreen from "./SignUpScreen";
import zomealLogo from '../assets/zomealLogo.jpg'

const verfiycode = () => {

}
const LoginScreen = ({ navigation }) => {
  return <Center w="100%" h='100%'>
    <Box safeArea py="8" w="90%" maxW="290">
      {/* <Image my='4' source={zomealLogo} alt='logo' /> */}
      <Heading size="2xl" fontWeight="800" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
        Welcome to Zomeal
      </Heading>
      <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
        Sign in to Continue
      </Heading>

      <VStack space={3} mt="30">
        <FormControl>
          <FormControl.Label>Phone Number</FormControl.Label>
          <InputGroup>
            <InputLeftAddon children={'+91'} />
            <Input w='90%' placeholder='Phone Number' type="numeric" />
          </InputGroup>
        </FormControl>
        <Center>
        <Button mt="8"  w='full' h='12' rounded={'full'} colorScheme="orange" onPress={() =>
          navigation.navigate('OTP Verification')
        } >
          Send Code
        </Button>
          </Center>
        <VStack mt="6" justifyContent="center">
          <Center>
            <Link onPress={()=>navigation.navigate('dashboard')}>Skip Signin</Link>
          </Center>
        </VStack>
      </VStack>
    </Box>
  </Center>
};

export default LoginScreen
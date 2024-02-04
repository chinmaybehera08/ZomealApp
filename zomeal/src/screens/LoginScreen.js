import * as React from "react";
import { Box, Text, InputGroup, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, InputLeftAddon, Image, ZStack } from "native-base";
import { FIREBASE_AUTH } from '../services/authService'
import Selection from '../screens/Selection'
import loginbg from '../assets/loginbg.png'


const verfiycode = () => {

}
const LoginScreen = ({ navigation }) => {
  return (
<Box>
    <ZStack w='100%' h='100%'>
      <Image width='100%' h='full' source={loginbg} alt='loginbg'/>
      <Center w="100%" h='80%'>
    <Box safeArea py="1" w="90%" maxW="290">
      <Heading size="2xl" fontWeight="800" color="white" _dark={{
        color: "amber.500"
      }}>
        Welcome to Zomeal
      </Heading>
      <Heading mt="1" _dark={{
        color: "white"
      }} color="white" fontWeight="medium" size="xs">
        Sign in to Continue
      </Heading>
      <VStack space={3} mt="30">
        <FormControl>
          <FormControl.Label color='white'>Phone Number</FormControl.Label>
          <InputGroup bg={'white'}>
            <InputLeftAddon children={'+91'} />
            <Input w='90%' placeholder='Phone Number' type="numeric" />
          </InputGroup>
        </FormControl>
        <Center>
        <Button mt="8"  w='full' h='12' rounded={'full'} colorScheme={'orange'}  onPress={() =>
          navigation.navigate('OTP Verification')
        } >
          Send Code
        </Button>
          </Center>
        <VStack mt="2" justifyContent="center">
          <Center>
            <Link color='white' onPress={()=>navigation.navigate('tabnavigator')}>Skip Signin</Link>
          </Center>
        </VStack>
      </VStack>
    </Box>
  </Center>
    </ZStack>
 
</Box>
  )
};

export default LoginScreen
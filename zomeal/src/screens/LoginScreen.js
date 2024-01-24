import * as React from "react";
import { Box, Text, InputGroup, Heading, VStack, FormControl, Input, Link, Button, HStack, Center,  InputLeftAddon, Image } from "native-base";
import {FIREBASE_AUTH} from '../services/authService'
import Selection from '../screens/Selection'
import SignupScreen from "./SignUpScreen";
import zomealLogo from '../assets/zomealLogo.jpg'

const verfiycode = ()=>{
  
}
const LoginScreen = ({navigation}) => {
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Image my='4' source={zomealLogo} alt='logo'/>
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
            <Input w='85%' placeholder='Phone Number'type="numeric"/>
            </InputGroup>
          </FormControl>
          <Button mt="2" colorScheme="orange" onPress={()=>
            navigation.navigate('selection')
          } >
            Send Code
          </Button>
          <VStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Button mt="2" colorScheme="orange" onPress={()=>
            navigation.navigate('signup')
          } >
            SignUp
          </Button>
          </VStack>
        </VStack>
        <HStack alignSelf='center'>
            <Button w='100' variant='outline'></Button>
            <Button w='100' variant='outline'></Button>
            <Button w='100' variant='outline'></Button>
        </HStack>
      </Box>
    </Center>
};

    export default LoginScreen
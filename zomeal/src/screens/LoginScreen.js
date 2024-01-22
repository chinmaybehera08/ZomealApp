import Styling from '../../styles'
import { useState } from 'react'
import { FIREBASE_AUTH } from '../services/authService'
import  { signInWithEmailAndPassword ,connectAuthEmulator,getAuth } from 'firebase/auth'
import { Box, Center, FormControl, Image } from 'native-base'
import logo from '../assets/adaptive-icon.png'




const LoginScreen = ({ navigation }) => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [userpassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handledTextChange = (username) => {
    setUsername(username);
  };

  const handledPasswordChange = (userpassword) => {
    setUserPassword(userpassword);
  };

  const signin = async () => {
    try {
      setLoading(true);
      const userCredentials = await signInWithEmailAndPassword(FIREBASE_AUTH, username, userpassword);
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
 
  return (
    <Box>
      <Box alignItems="center" >
        <Center>
          <Image source={{
            uri:{logo}
          }} alt="zomeal_logo"/>
        </Center>
      </Box>
      <FormControl isRequired>
      <Stack mx="4">
            <FormControl.Label>Phone Number</FormControl.Label>
            <Input type="number" defaultValue="12345" placeholder="Enter your phone number" />
            <FormControl.HelperText>
              Please mention your !0 digits phone number
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              The Phone number should be of 10 digits.
            </FormControl.ErrorMessage>
          </Stack>
          <Stack mx="4">
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" defaultValue="12345" placeholder="password" />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
    </Box>
  )

}
export default LoginScreen
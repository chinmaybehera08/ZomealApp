import { Text, View,Pressable,ToastAndroid } from 'react-native'
import { useTheme, Button,Checkbox,TextInput, PaperProvider, Divider } from 'react-native-paper'
import Styling from '../../styles'
import { useState } from 'react'
import { FIREBASE_AUTH } from '../services/authService'
import  { signInWithEmailAndPassword ,connectAuthEmulator,getAuth } from 'firebase/auth'





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
     <PaperProvider>
       <View style={Styling.container}>
       <Divider/>
       <TextInput
        style={Styling.textfield}
        mode='outlined'
        label='Enter your Username'
        value={username}
        keyboardType='email-address'
        onChangeText={handledTextChange}
       />
       <View style={{width:'80%',paddingBottom:2}}>
          <Text style={Styling.forgetPasswordText}>Forget Username.</Text>
        </View>
       <TextInput 
        style={Styling.textfield}
        mode='outlined'
        label='Enter your password'
        value={userpassword}
        textContentType='newPassword'
        onChangeText={handledPasswordChange}
       
        />
       
        <View style={{width:'80%',paddingBottom:2}}>
          <Text style={Styling.forgetPasswordText}>Forget Password.</Text>
        </View>
        <View style={{display:'flex', flexDirection:'row',width:'85%',paddingTop:10,paddingBottom:10}}>
          <Checkbox status={checked ? 'checked':'unchecked'} onPress={()=>setchecked(!checked)}></Checkbox>
          <Text style={{ width:'85%',color:Styling.primary ,fontSize:13.5, textAlign:'left'}}>I have read and agreed to the terms and conditions.</Text>
        </View>
        <Pressable onPress={()=>
        navigation.navigate('termsCondition')}>
          <Text>Terms And Conditions</Text>
        </Pressable>
        <Button mode='contained' style={Styling.button} onPress={
          signin }>
          Login
        </Button>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'center',width:'80%',padding:'5px'}}>
          <Text style={{color:'black',fontSize:12.5, textAlign:'center'}}>Don't have an account.?</Text>
          <Pressable style={{color:'#fff',fontSize:10.5}} onPress={()=>
        navigation.navigate('signup')}>
          <Text style={{color:'blue', marginLeft:2, fontSize:12.5}}>SignUp here</Text>
        </Pressable>
        </View>
      </View>
      
     </PaperProvider>
  )

}
export default LoginScreen
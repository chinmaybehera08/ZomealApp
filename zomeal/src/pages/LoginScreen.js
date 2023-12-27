import { Text, View, TouchableOpacity, Pressable } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { useTheme, Button,Checkbox,TextInput } from 'react-native-paper'
import Styling from '../../styles'
import { useState } from 'react'
import { Field, reduxForm } from 'redux-form';
import TextField from '../components/TextField'



const LoginScreen = ({handleSubmit ,navigation}) => {
  const theme = useTheme()
  const [checked ,setchecked] = useState(false)
  return (
    <PaperProvider>
      
      <View style={Styling.container}>
       <Field style={Styling.textfield}
       name="username"
       component={TextField}
       placeholder='Enter your Username'
       />
       <Field style={Styling.textfield}
        name="password"
        component={TextField}
        placeholder='Enter your password'
       />
        <View style={{display:'flex', flexDirection:'row',width:'85%',paddingTop:10,paddingBottom:10}}>
          <Checkbox status={checked ? 'checked':'unchecked'} onPress={()=>setchecked(!checked)}></Checkbox>
          <Text style={{ width:'85%',color:'secondary',fontSize:13.5, textAlign:'left'}}>I have read and agreed to the terms and conditions.</Text>
        </View>
        <Pressable onPress={()=>
        navigation.navigate('termsCondition')}>
          <Text>Terms And Conditions</Text>
        </Pressable>
        <Button mode='contained' style={Styling.button} onPress={()=>
        navigation.navigate('menu')}>
          Login
        </Button>
        <View style={{width:'80%',padding:'5px'}}>
          <Text style={{color:'secondary',fontSize:12.5, textAlign:'center'}}>Forget Password.?</Text>
        </View>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'center',width:'80%',padding:'5px'}}>
          <Text style={{color:'black',fontSize:12.5, textAlign:'center'}}>Don't have an account.?</Text>
          <Pressable style={{color:'#fff',fontSize:10.5}} onPress={()=>
        navigation.navigate('Signup')}>
          <Text style={{color:'blue', marginLeft:2, fontSize:12.5}}>SignUp here</Text>
        </Pressable>
        </View>
      </View>
    </PaperProvider>
  )

}
export default reduxForm({
  form:'loginForm', // a unique indentifier fro this form 
})(LoginScreen)
import { ScrollView, Text,View} from "react-native"
import { PaperProvider, Button, TextInput,Checkbox } from "react-native-paper"
import Styling from "../../styles"
import { useState } from "react"
import { Pressable } from "react-native";
import {Field, reduxForm} from 'redux-form'
import TextField from "../components/TextField";





const SignUpScreen=({handleSubmit, navigation})=>{
  const [text, setText] = useState("")
  const [checked ,setchecked] = useState(false)
return(
  <PaperProvider>
    <ScrollView>
    <View style={Styling.container}>
    <Text style={{fontSize:19.5,fontWeight:600}}>Create Your Account</Text>
    <Text style={{fontSize:14.5,marginBottom:20}}>Please Enter your credentials</Text>
       <Field name="Full name" component={TextField} placeholder="Enter your full name" required />
       <Field name="Password" component={TextField} placeholder="Enter your password" />
       <Field name="Confirm Password" component={TextField} placeholder="Confirm password"/>
       <Field name="Email id" component={TextField} placeholder="Enter your email"/>
       <Field name="Phone Number" component={TextField} placeholder="Enter your phone number"/>
       <Field name="Address" component={TextField} placeholder="Enter your address"/>
    <View style={{display:'flex', flexDirection:'row',width:'85%',paddingTop:10,paddingBottom:10}}>
          <Checkbox status={checked ? 'checked':'unchecked'} onPress={()=>setchecked(!checked)}></Checkbox>
          <Text style={{ width:'85%',color:'secondary',fontSize:13.5, textAlign:'left'}}>I have read and agree to our terms and conditions.</Text>
        </View>
        <Pressable onPress={()=>
        navigation.navigate('termsCondition')}>
          <Text>Terms And Conditions</Text>
        </Pressable>
        <Button mode='contained' style={Styling.button} onPress={()=>
        navigation.navigate('pincode')}>Sign Up</Button>
    </View>
  </ScrollView>
  </PaperProvider>
)
}
export default reduxForm({
  form:'signupform'
})(SignUpScreen)
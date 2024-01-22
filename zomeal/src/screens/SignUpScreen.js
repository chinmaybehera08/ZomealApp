import { ScrollView, Text,ToastAndroid,View} from "react-native"
import { PaperProvider, Button, TextInput,Checkbox } from "react-native-paper"
import Styling from "../../styles"
import { useEffect, useState } from "react"
import { Pressable } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "../services/authService";
import { addDoc, collection } from "@firebase/firestore";
import { FormControl } from "native-base"






const SignUpScreen=({ navigation})=>{
  const [text, setText] = useState("")
  const [checked ,setchecked] = useState(false)
  const [emailid, setEmailid] = useState('')
  const [firstname, setFirstname] = useState('')
  const [middlename,setMiddlename] = useState('')
  const [lastname,setLastName] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState(' ')
  const [phoneNumber, setPhoneNumber] = useState(' ')
  const [loading, setLoading] = useState(false);


  const handleEmailInput=(emailid)=>{
   setEmailid(emailid)
  }
  const handleFirstnameInput=(firstname)=>{
   setFirstname(firstname)
  }
  const handleMiddlenameInput = (middlename)=>{
    setMiddlename(middlename)
  }
  const handleLastnameInput = (lastname)=>{
    setLastName(lastname)
  }
  const handlePasswordInput=(password)=>{
   setPassword(password)
  }
  const handleConfirmPasswordInput=(cpassword)=>{
    setCpassword(cpassword)
  }
  const handleAddressInput=(address)=>{
   setAddress(address)
  }
  const handlePhoneNumberInput=(phoneNumber)=>{
    setPhoneNumber(phoneNumber)
  }
  const handlePincodeInput = (pincode)=>{
    setPincode(pincode)
  }





   const signup =  () =>{
    useEffect(()=>{
      try{
        setLoading(true)
      const Credentials = createUserWithEmailAndPassword(FIREBASE_AUTH,emailid,password,cpassword,firstname,middlename,lastname,address,pincode,phoneNumber)
      const firestoreDocument = addDoc(collection(FIREBASE_FIRESTORE,'zomeal_user'),{
        fname:firstname,
        mname:middlename,
        lname:lastname,
        emailid:emailid,
        address:address,
        pinocde:pincode,
        phonenumber:phoneNumber
      })
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

return(
  <PaperProvider>
    <ScrollView>
    <View style={Styling.container}>
    <Text style={{fontSize:19.5,fontWeight:600}}>Create Your Account</Text>
    <Text style={{fontSize:14.5,marginBottom:20}}>Please Enter your credentials</Text>
       <TextInput 
       mode='outlined'
       value={fullname} 
       style={Styling.textfield}
       onChangeText={handleFirstnameInput}
       name="Fname"  
       placeholder="Enter your first name"
       error='true' required />
       <TextInput 
       mode='outlined'
       value={fullname} 
       style={Styling.textfield}
       onChangeText={handleMiddlenameInput}
       name="Mname"  
       placeholder="Enter your middle name"
       error='true' required />
       <TextInput 
       mode='outlined'
       value={fullname} 
       style={Styling.textfield}
       onChangeText={handleLastnameInput}
       name="Lname"  
       placeholder="Enter your last name"
       error='true' required />

       <TextInput 
       mode='outlined'
       value={password} 
       style={Styling.textfield}
       onChangeText={handlePasswordInput}
       name="Password"  
       placeholder="Enter your password" />

       <TextInput 
       mode='outlined'
       value={cpassword} 
       style={Styling.textfield}
       onChangeText={handleConfirmPasswordInput}
       name="Confirm Password"  
       placeholder="Confirm password"/>

       <TextInput 
       mode='outlined'
       value={emailid} 
       style={Styling.textfield}
       onChangeText={handleEmailInput}
       name="Email id"  
       placeholder="Enter your email"/>

       <TextInput 
       mode='outlined'
       value={phoneNumber} 
       style={Styling.textfield}
       onChangeText={handlePhoneNumberInput}
       name="Phone Number"  
       textContentType="telephoneNumber"
       placeholder="Enter your phone number"/>

       <TextInput 
       mode='outlined'
       value={address} 
       style={Styling.textfield}
       onChangeText={handleAddressInput}
       name="Address"  
       placeholder="Enter your address"
       />
         <TextInput 
       mode='outlined'
       value={address} 
       style={Styling.textfield}
       onChangeText={handleAddressInput}
       name="Pincode"  
       placeholder="Enter your pincode"
       />
    <View style={{display:'flex', flexDirection:'row',width:'85%',paddingTop:10,paddingBottom:10}}>
          <Checkbox status={checked ? 'checked':'unchecked'} onPress={()=>setchecked(!checked)}></Checkbox>
          <Text style={{ width:'85%',color:Styling.primary,fontSize:13.5, textAlign:'left'}}>I have read and agree to our terms and conditions.</Text>
        </View>
        <Pressable onPress={()=>
        navigation.navigate('termsCondition')}>
          <Text>Terms And Conditions</Text>
        </Pressable>
        <Button mode='contained' style={Styling.button} onPress={signup}>Sign Up</Button>
    </View>
  </ScrollView>
  </PaperProvider>
)
}
export default SignUpScreen
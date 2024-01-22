import Styling from "../../styles"
import { useEffect, useState } from "react"
import { Pressable } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "../services/authService";
import { addDoc, collection } from "@firebase/firestore";
import { FormControl, NativeBaseProvider } from "native-base"






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
  <Box>
    <ScrollView>
     
    </ScrollView>
  </Box>
)
}
export default ()=>{
  <NativeBaseProvider>
    <Center flex={3} px='3'>
      <SignUpScreen/>
    </Center>
  </NativeBaseProvider>
}
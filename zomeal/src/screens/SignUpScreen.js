
import { useEffect, useState } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "../services/authService";
import { addDoc, collection } from "@firebase/firestore";
import { Container,Content,Form,Item,Input,Button,Text,Box,Center, Image, FormControl, TextArea } from "native-base"
import zomealLogo from '../assets/zomealLogo.jpg'





const SignUpScreen=({ navigation})=>{
  const [text, setText] = useState("")
  const [checked ,setchecked] = useState(false)
  const [emailid, setEmailid] = useState('')
  const [firstname, setFirstname] = useState('')
  const [middlename,setMiddlename] = useState('')
  const [lastName,setLastName] = useState('')
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
  const [firstName, setFirstName] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [pinCode, setPinCode] = useState('');

  const handleSignup = () => {
    // Perform signup logic here
    // You can use the entered values (firstName, lastName, phoneNumber, verificationCode, pinCode)
    // For simplicity, I'm just showing a toast message with the entered values
    const message = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nVerification Code: ${verificationCode}\nPin Code: ${pinCode}`;
    
    Toast.show({
      text: message,
      duration: 5000,
    });
  };

  const handleLocateMe = () => {
    // Perform locate me logic here
    // This is a placeholder, you can implement geolocation functionality
    Toast.show({
      text: 'Locating...',
      duration: 3000,
    });
  };




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
    <Center>
      <Image my='4' source={zomealLogo}/>
      <Divder/>
     <FormControl>
     <Input placeholder='Enter your first name'/>
     <Input placeholder='Enter your surname'/>
     <TextArea/>
     </FormControl>
    </Center>
  </Box>
)
}
export default SignUpScreen
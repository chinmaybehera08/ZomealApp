import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { FIREBASE_APP } from "./authService";

const phoneNumber =  getPhoneNumberFromUserInput()
const appVerifier = window.recaptchaVerifier
const auth = getAuth(FIREBASE_APP)
signInWithPhoneNumber(auth,phoneNumber,appVerifier)
.then((confirmationResult)=>{
    window.confirmationResult = confirmationResult
}).catch((error)=>{

})
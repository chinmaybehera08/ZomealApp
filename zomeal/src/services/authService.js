import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase, ref, onValue } from 'firebase/database';


const firebaseConfig = {
  apiKey:"AIzaSyCtMd-5mZsHJxTY8m9RLU7iVSzvj0PsODk",
  authDomain: "zomealdatabase.firebaseapp.com",
  projectId: "zomealdatabase",
  storageBucket: "zomealdatabase.appspot.com",
  databaseURL: "https://zomealdatabase-default-rtdb.asia-southeast1.firebasedatabase.app/",
  messagingSenderId: "716303376811",
  appId: "1:716303376811:web:69f40cfb3e124ad94772ee",
  measurementId: "G-H920C8J30H"
};

// Initialize Firebase app
export const FIREBASE_APP = initializeApp(firebaseConfig);


// Authentication
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);


// Firestore
export  const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);

// Realtime Database
export const FIREBASE_DB = getDatabase(FIREBASE_APP);


const dataReference = ref(FIREBASE_DB,'5/data/')
onValue(dataReference,(snapshot)=>{
   const fetchingData = snapshot.val()
   const fetchedData = fetchingData
   console.log(JSON.stringify(fetchedData,null,2))
  })
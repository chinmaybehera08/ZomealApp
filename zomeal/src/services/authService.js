import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase, onValue, ref} from 'firebase/database';
import { collection,getDocs,addDoc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA3EX1oJQbD3_472UB7BoA1Adz0Twy2H5U",
  authDomain: "zomealapp-a528b.firebaseapp.com",
  databaseURL: "https://zomealapp-a528b-default-rtdb.firebaseio.com",
  projectId: "zomealapp-a528b",
  storageBucket: "zomealapp-a528b.appspot.com",
  messagingSenderId: "422976100777",
  appId: "1:422976100777:web:511bf26b16424a9a4c4cb8",
  measurementId: "G-B78XW2MYBT"
};


// Initialize Firebase app
export const FIREBASE_APP = initializeApp(firebaseConfig);


// Authentication
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);


// Firestore
export  const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);

// Realtime Database
export const FIREBASE_DB = getDatabase(FIREBASE_APP);


// const dataReference = ref(FIREBASE_FIRESTORE,'users')
// onValue(dataReference,(snapshot)=>{
//    const fetchingData = snapshot.val()
//    const fetchedData = fetchingData
//    console.log(JSON.stringify(fetchedData,null,2))
//   })

  const fetchDataFromFirestore = async () => {
    try {
      const docRef = await getDocs(collection(FIREBASE_FIRESTORE, "users"))
     docRef.forEach((doc)=>{
      console.log(JSON.stringify(doc.data()))
     })
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  
  // Call the function
  fetchDataFromFirestore();


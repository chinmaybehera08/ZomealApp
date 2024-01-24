import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase, onValue, ref} from 'firebase/database';
import { collection,addDoc } from 'firebase/firestore'


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
      const snapshot = await getDocs(collection(db,'users'))
      snapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
      
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Call the function
  fetchDataFromFirestore();


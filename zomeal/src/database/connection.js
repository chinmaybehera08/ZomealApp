import { FIREBASE_DB } from '../services/authService'



// Fetch data from the 'zomealco_food' node
const dataRef = ref(FIREBASE_DB, '3/data');
onValue(dataRef, (snapshot) => {
  const jsonData = snapshot.val();
  if (jsonData) {
    console.log(JSON.stringify(jsonData, null, 2));
  } else {
    console.log('No data found.');
  }
}, (error) => {
  console.error('Error fetching data:', error.message);
});
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  const [details, setDetails] = useState(null); // Initialize state for storing details

  useEffect(() => { // Use useEffect to fetch data when component mounts
    const fetchData = async () => {
      const documentSnapshot = await firestore()
        .collection('Packages')
        .doc('b4CcF3bglUVUyGELBbps')
        .get();
      setDetails(documentSnapshot.data()); // Update state with retrieved data
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures useEffect runs only once when component mounts

  return (
    <View>
      {/* Display details when available */}
      {details && <Text>{JSON.stringify(details)}</Text>}
      {/* Button to trigger fetching data */}
      <Button title="Fetch Data" onPress={() => {}} />
    </View>
  );
};

export default Home;

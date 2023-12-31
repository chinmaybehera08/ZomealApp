import React from 'react';
import { View, Text, FlatList } from 'react-native';

const YourComponent = ({ foodData }) => {
  return (
    <View>
      <Text>Food Types:</Text>
      <FlatList
        data={foodData}
        keyExtractor={(item) => item.fid}
        renderItem={({ item }) => (
          <View>
            <Text>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default YourComponent;

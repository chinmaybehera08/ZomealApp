import { Box, HStack, Center, Button, Card, Heading,Text, useTheme } from 'native-base'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Both from '../Packages.js/Both';
import Lunch from '../Packages.js/Lunch';
import Dinner from '../Packages.js/Dinner';

const Tab = createMaterialTopTabNavigator();

function ServiceTab() {
  return (
     <Tab.Navigator style={{marginTop:70, width:'90%', marginLeft:'auto', marginRight:'auto', borderRadius:10}}>
      <Tab.Screen name="Both" component={Both} />
      <Tab.Screen name="Lunch" component={Lunch} />
      <Tab.Screen name="Dinner" component={Dinner}/>
    </Tab.Navigator>
);
}
export default ServiceTab
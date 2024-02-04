import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Balance from '../screens/Balance';
import Calories from '../screens/Calories';
import { Box, HStack } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/Dashboard';
import HomeTab from '../TabScreens/HomeTab'
import PackageTab from '../TabScreens/PackageTab';
import ServiceTab from '../TabScreens/ServiceTab'
import MenuTab from '../TabScreens/MenuTab'
import CloudKitchen from '../TabScreens/CloudKitchen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Ionicons} from '@expo/vector-icons'
import { orange } from '@mui/material/colors';
const Tab = createBottomTabNavigator();
const HomeTabStack = createNativeStackNavigator();
function TabNavigator({navigation}) {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { height: 70, paddingBottom: 10 } }} >  
    <Tab.Screen name="Home" component={HomeTab} options={{ headerLeft: ()=>(
      <Ionicons name="md-menu" size={30} color={orange} style={{marginLeft:20}} onPress={()=>navigation.navigate("dashboard")}/>
    ), headerShown: true, tabBarLabelPosition: 'below-icon' ,headerRight:()=>(
      <Ionicons name="" size={30} color={orange} style={{marginRight:20}} onPress={()=>navigation.naivgate("notifications")}/>
    ) }}/>
   <Tab.Screen name="Package" component={PackageTab} options={{ headerShown: true }} />
   <Tab.Screen name="Services" component={ServiceTab} options={{ headerShown: false }} />
   <Tab.Screen name="Menu" component={MenuTab}/>
   </Tab.Navigator>
);
}
export default TabNavigator
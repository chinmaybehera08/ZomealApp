import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from '../TabScreens/HomeTab'
import PackageTab from '../TabScreens/PackageTab';
import ServiceTab from '../TabScreens/ServiceTab'
import MenuTab from '../TabScreens/MenuTab'
import zomealLogo from '../assets/zomealLogo.jpg'

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{height:70,paddingBottom:10}}} >
      <Tab.Screen name="Home" component={HomeTab} options={{headerShown:false, tabBarLabelPosition:'below-icon'}}/>
      <Tab.Screen name="Package" component={PackageTab} options={{headerShown:false}}/>
      <Tab.Screen name="Services" component={ServiceTab}/>
      <Tab.Screen name="Menu" component={MenuTab}/>
    </Tab.Navigator>
  );
}
export default Tabs
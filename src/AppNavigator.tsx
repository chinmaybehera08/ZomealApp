import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import Splash from "./Screens/Splash"
import Home from "./Screens/Home"
import { createStackNavigator } from '@react-navigation/stack';



const stack=createNativeStackNavigator();

const AppNavigator= () => {

    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen component={Splash} name='Splash' options={{headerShown: true}}/>
                <stack.Screen component={Login} name='Login' options={{headerShown: true}}/>
                <stack.Screen component={Home} name='Home' options={{headerShown: true}}/>
            </stack.Navigator>

        </NavigationContainer>
            
    )

};

export default AppNavigator;





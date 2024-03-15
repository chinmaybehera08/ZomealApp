import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import PhoneSignIn from "./auth/PhoneSign";
import LoginRedirect from "./screens/LoginRedirect";
import Dashboard from "./screens/Dashboard";
import Loginscreen from "./screens/Loginscreen";



const Stack=createNativeStackNavigator();

const AppNavigator= () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen component={LoginRedirect} name="LoginRedirect" options={{headerShown:false}}/>
                <Stack.Screen component={PhoneSignIn} name="PhoneSignin" options={{headerShown:false}}/>
                
                <Stack.Screen component={Dashboard} name="Dashboard" />
            </Stack.Navigator>
        </NavigationContainer>
            
    )

};

export default AppNavigator;





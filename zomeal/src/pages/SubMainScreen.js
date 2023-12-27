import {View} from 'react-native'
import { PaperProvider, Button } from 'react-native-paper'
import Styling from '../../styles'
const SubMainScreen = ({navigation}) =>{
return(
    <PaperProvider>
        <View style={Styling.bottomContainer}>
            <Button mode='contained'style={Styling.button} onPress={()=>
            navigation.navigate('Signup')}>SignUp</Button>
            <Button mode='contained' style={Styling.button} onPress={()=>
            navigation.navigate('Login')}>LogIn</Button>
        </View>
    </PaperProvider>
)
}
export default SubMainScreen
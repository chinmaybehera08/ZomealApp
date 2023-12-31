import {View} from 'react-native'
import { PaperProvider, Button } from 'react-native-paper'
import Styling from '../../styles'
const SubMainScreen = ({navigation}) =>{
return(
    <PaperProvider>
        <View style={Styling.bottomContainer}>
            <Button mode='contained'style={Styling.button} onPress={()=>
            navigation.navigate('signup')}>SignUp</Button>
            <Button mode='contained' style={Styling.button} onPress={()=>
            navigation.navigate('login')}>LogIn</Button>
        </View>
    </PaperProvider>
)
}
export default SubMainScreen
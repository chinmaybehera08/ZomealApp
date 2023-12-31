import { View,Text} from "react-native";
import { TextInput } from "react-native-paper";

const InputField = () =>{
return(
    <View style={{widht:'90%'}}>
     <TextInput multiline label='Address' placeholder=" Your meal will be delivered to this address. Please fill up the address appropriately." style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginVertical:10,height:150}}/>
     <TextInput label='Pincode' placeholder="Your meal will be delivered to this pincode" keyboardType="phone-pad" style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginVertical:10}} disabled=''/>
     <TextInput label='Landmark'placeholder='Help us to locate your address' style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginVertical:10}} disabled=''/>
    </View>
)
}
export default InputField
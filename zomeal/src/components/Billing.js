import { View } from "react-native"
import { Card, Text,Chip } from "react-native-paper"


const Billing = () =>{
return(
    <View>
    <View style={{width:'90%',height:50,marginLeft:'auto',marginRight:'auto',marginVertical:10,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <Text variant="bodyLarge">Amount</Text>
        <Text variant="bodyLarge">2300</Text>
    </View>
    </View>
)
}
export default Billing
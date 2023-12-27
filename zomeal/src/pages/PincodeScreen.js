import { Text, TextInput,View} from "react-native"
import { Button, Card } from 'react-native-paper'
import Styling from '../../styles'
import { Pressable } from "react-native"
import {Field, reduxForm} from 'redux-form'
import TextField from '../components/TextField'

const PincodeScreen=({handleSubmit ,navigation})=>{
    /**
  * If the pincode is valid in our database the popup text will appear 'Delivery available in your area'
  * If the pincode is not valid 'Sorry, delivery not available in this area. Please enter a valid address.'
  * If the pincode not valid 3 times 'Mail us for further details'
  */
return(
<Card style={{ 
              position:'absolute',
              bottom:0,
              width:'100%',
              borderEndEndRadius:0,
              borderBottomEndRadius:0
              }}>
                <View style={Styling.container}>
                    <Text style={{width:'80%',fontSize:18.5,fontWeight:600,marginTop:20,marginBottom:10, textAlign:'left'}}>Discover Delightful Dining Experience</Text>
                    <Text style={{width:'80%'}}>Explore our menu and enjoy hassle-free food delivery in your area.</Text>
                <Field name="pincode" component={TextField} placeholder="Enter your pincode"/>

 <Button mode='contained' onPress={()=>
navigation.navigate('menu')} style={Styling.button}>Check Availability</Button>
<View style={{width:'85%'}}>
    <Text style={{textAlign:'center'}}>Not Covered?</Text>
<Pressable style={{marginTop:5,marginBottom:30}}>
    <Text style={{fontSize:14.5}}>Let us know your preferences or ask any questions</Text>
</Pressable>
</View>
</View>
</Card>
)
}
export default reduxForm({form:'pincode'})(PincodeScreen)
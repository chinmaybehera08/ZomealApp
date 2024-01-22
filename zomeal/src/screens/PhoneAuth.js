import React from 'react'
import { TextInput, View, Text } from 'react-native'
import { TextInputAffixProps } from 'react-native-paper'
import Styling from '../../styles'




const PhoneAuth = ()=>{
return(
  <View style={Styling.container}>
    <Text style={{textAlign:'left'}}>Enter your 10 digit number</Text>
   <TextInput style={Styling.textfield} keyboardType='number-pad' label='Phone Number' placeholder='+91'/>
  </View>
)
}
export default PhoneAuth
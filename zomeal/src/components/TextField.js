import React from 'react'
import { TextInput } from 'react-native'
const TextField = (width,borderColor,borderWidth,borderRadius,placeholder)=>{
 return(
    <TextInput style={{
        width:width,
        borderColor:borderColor,
        borderWidth:borderWidth,
        borderRadius:borderRadius,
        placeholder:placeholder
    }}/>
 )
}
export default TextField
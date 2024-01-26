import { InputLeftAddon } from 'native-base'
import React from 'react'
const InputGroup =({prefix, placeholder}) =>{
<InputGroup>
<InputLeftAddon children={prefix}/>
<Input placeholder={placeholder}/>
</InputGroup>
}
 export default InputGroup
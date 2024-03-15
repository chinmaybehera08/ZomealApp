import {useState} from 'react'
import { Button, ButtonText } from '@gluestack-ui/themed'
const CustomButton =({title,size,rounded,variant,borderColor,handlePressEvent,width,height,alignSelf,bgColor,color,marginTop,marginBottom,marginHorizontal,marginVertical,marginLeft,marginRight, ...props})=>{
return(
<Button borderRadius='$full' w={width} h={height} justifyContent='center' alignSelf={alignSelf} size={size} variant={variant} onPress={handlePressEvent} style={{backgroundColor:bgColor,borderColor:borderColor,marginTop:marginTop,marginBottom:marginBottom,marginHorizontal:marginHorizontal,marginVertical:marginVertical,marginRight:marginRight,marginLeft:marginLeft}} {...props}>
    <ButtonText style={{borderColor:borderColor,color:color}}>{title}</ButtonText>
</Button>
)
}
export default CustomButton
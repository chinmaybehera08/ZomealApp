import React from 'react'
import { Button } from 'native-base'
const Button = ({Text,isLoading,isLoadingText}) =>{
 return(
    <Button isLoading= {isLoading} isLoadingText={isLoadingText}>
     {Text}
    </Button>
 )
}
export default Button
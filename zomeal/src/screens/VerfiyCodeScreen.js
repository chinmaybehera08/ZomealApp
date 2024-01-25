import React, { useState } from 'react'
import {Center,Box,Input,Heading,Button,FormControl,VStack} from 'native-base'
const VerfiyCodeScreen=({navigation})=>{

return(
<Box safeArea='4' p='4' my='4'>
    <VStack space={'4'} alignItems='center'>
      <Center h={'100%'}>
      <Heading size={'md'} fontWeight={'500'} my='4'>
      Otp Verification
    </Heading>
    <Heading  size={'xs'} fontWeight={'400'}>Please Enter your 4 otp sent your registerd mobile number</Heading>
    <FormControl my='4'>
      <Input w='100%' placeholder='Enter your Otp'/>
    </FormControl>
    <Button my='4' w='200' h='12' mt='6' colorScheme={'orange'} rounded={'full'} onPress={()=>
    navigation.navigate('Add Address')}>Confirm</Button>
      </Center>
   </VStack>
</Box>
)
}
export default VerfiyCodeScreen
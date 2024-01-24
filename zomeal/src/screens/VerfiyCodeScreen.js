import {Box, VStack, FormControl, Input,Text, NativeBaseProvider ,Center } from 'native-base'
import * as React from 'react'
const VerifyCodeScreen =()=>{
return(
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Text>Holaaa</Text>
     
    </Box>
)
}
export default ()=>{
    <NativeBaseProvider>
        <Center>
            <VerifyCodeScreen/>
        </Center>
    </NativeBaseProvider>
}
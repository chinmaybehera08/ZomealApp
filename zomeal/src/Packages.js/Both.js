import { Box, Center, HStack, Heading, Text } from 'native-base'
import React from 'react'
import { Button } from 'react-native-paper'

const Both=()=>{
 return(
    <Box safeArea='2' p='2'>
            <Center>
                <Center mt='10' w='95%' h='90%' bg='amber.50' rounded={'lg'} >
                 <Heading>Lunch & Dinner</Heading>
                 <Text>Main Course</Text>
                </Center>
            </Center>
        </Box>
 )
}
export default Both
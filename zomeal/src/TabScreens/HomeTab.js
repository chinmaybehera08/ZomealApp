import React from 'react'
import { Card } from 'native-base'
import { HStack,VStack, Heading, Box, Text} from 'native-base'


const HomerTab=()=>{
return(
    <Box safeArea='2' p='2'>
    <VStack>
     <Heading>Packages</Heading>
    <HStack>
         <Card>
            <Text>Student Package</Text>
         </Card>
      
     </HStack>
    </VStack>
 </Box>
)
}
export default HomerTab
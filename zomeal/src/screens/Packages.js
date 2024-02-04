import { Box, Card, Center, Heading, ScrollView } from 'native-base'
import React from 'react'

const Package = ()=>{
return(
    <Box safeArea='2' p='2'>
    <Heading>Packages</Heading>
 <ScrollView horizontal p='4' w='100%' h='220' showsHorizontalScrollIndicator={false}>
 <Card w='300' h='150' mr='5' shadow='4' bg='gray.50'>
   <Center>Student Package</Center>
 </Card>
 <Card w='300' h='150'mr='5' shadow='4' bg='gray.50'>
   <Center>Corporate Package</Center>
 </Card>
 <Card w='300' h='150' mr='5' shadow='4' bg='gray.50'>
   <Center>Vendor Package</Center>
 </Card>
 </ScrollView>
</Box>
)
}
export default Package
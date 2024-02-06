import React from 'react'
import { Box, Card, Center, Heading, ScrollView, HStack, Image,Text } from 'native-base'


const FoodItems=()=>{
return(
    <Box safeArea='2' p='2'>
    <Heading>Our FoodItems</Heading>
    <Box>
    <Box>
        <Image rounded={'full'} alt='fooditems'/>
        <Text>{'Rice'}</Text>
    </Box>
    </Box>
</Box>
)
}
export default FoodItems
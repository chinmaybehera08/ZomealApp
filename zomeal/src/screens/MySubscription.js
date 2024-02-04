import React from 'react'
import {Box , HStack} from 'native-base'
const MySubscription = ()=>{
return(
    <Box safeArea='2' p='2'>
     <Card w='100%' h='100%' shadow='2'>
     <Text>Subscription history</Text>
     <Divider/>
     <HStack justifyContent='space-around'>
        <Text>Package Selected</Text>
        <Text>Student Package</Text>
     </HStack>
     <HStack justifyContent='space-around'>
        <Text>Food Type</Text>
        <Text>Lunch</Text>
     </HStack>
     <HStack justifyContent='space-around'>
        <Text>Food Preference</Text>
        <Text>Vegeterian</Text>
     </HStack>
     <Divider/>
     <HStack justifyContent='space-around'>
        <Text>Customisation</Text>
        <Text>Arwa Rice</Text>
     </HStack>
     <Divider/>
     <HStack justifyContent='space-around'>
        <Text>Amonut Total</Text>
        <Text>$2000</Text>
     </HStack>
     </Card>
     <Button color='amber.50'>Proceed to Checkout</Button>
    </Box>
)
}
export default MySubscription
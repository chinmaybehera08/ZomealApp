import { Box, Heading, Text, Card, HStack, Image, Center } from "native-base"
import dish from '../assets/dish.png'
const TodaysMenu = ()=>{
return(
    <Box safeArea='2' p='2'>
        <Heading>Todays Menu</Heading>
        <Card shadow='4' my='2' bg='gray.50'>
            <HStack justifyContent={'space-around'}>
               <Box>
              <Center>
                    <Image w='100' h='100' source={dish}/>
                    <Text p='2'fontSize={'md'} fontWeight={'500'}>Lunch</Text>
                </Center>
               </Box>
               <Box>
                <Center>
                      <Image w='100' h='100' source={dish}/>
                    <Text p='2'fontSize={'md'} fontWeight={'500'}>Dinner</Text>
                </Center>
               </Box>
            </HStack>
        </Card>
    </Box>
)
}
export default TodaysMenu
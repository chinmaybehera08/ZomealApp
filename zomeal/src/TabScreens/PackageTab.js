import React from 'react'
import { ScrollView } from 'native-base'
import { Card , Center, HStack,VStack, Heading, Box, Text, Divider} from 'native-base'
import {StyleSheet} from 'react-native'

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

const PackageTab=()=>{
  const [expanded, setExpanded] = React.useState(true);

const handlePress = () => setExpanded(!expanded);
return(
    <Box safeArea='2' p='2'>
    <ScrollView>
       <VStack>
           <Center>
           <Card w='90%' my='2' bg='gray.50' shadow='4' p='6'>
             <Center>
             <Heading size={'lg'} my='2'>Student Package</Heading>
             <Text fontSize={'2xl'}>$2000</Text>
             </Center>
             <Divider my='2'/>
             <Text>Price Per Day</Text>
             <Center>
             <Text fontSize={'md'}>Details</Text>
             <Divider/>
             </Center>
            
             
            
          
           </Card>
           </Center>
           <Center w='95%'h='80' my='2'>
             <Heading>Corporate Package</Heading>
           </Center>
           <Center w='95%' h='80' my='2'>
             <Heading>Vendor Package</Heading>
           </Center>
        </VStack>
    </ScrollView>
    </Box>
)
}
export default PackageTab
const styles = StyleSheet.create({

  cell: {
     flex: 1,
     padding: 1,
     width: 200,
     height: 30,
     textAlign: "center",
     marginLeft:2,
     fontSize: 12,
     color: "black",
     borderColor: "black",
  },
});

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Box, ScrollView , HStack, Button, Text} from 'native-base'
import React,{useState} from 'react'
import Packages from '../screens/Packages'
import TodaysMenu from '../screens/TodaysMenu'
const HomeTabStack = createNativeStackNavigator()
function handleCalories(){
    return(
        <HomeTabStack.Navigator>
            <HomeTabStack.Screen name="Calories" component={Calories}/>
        </HomeTabStack.Navigator>
    )
}

const HomeTab = ({navigation})=>{
       const [color, setColor] = useState(false)
   const [isActive, setActive] = useState(false)
   const handleButtonColor = (color) => {
     setColor(!color)
     setActive(!isActive)
   }
return(
    <Box>
   <ScrollView h='80%'>
<Packages />
<TodaysMenu />
</ScrollView>
<Box alignContent={'space-around'} position={'fixed'} bottom='0' width={'100%'}>
<Box safeArea='2' p='10'>
<HStack justifyContent={'space-between'}>
{/* Cash balance Section */}
<Button w='75' h='75' shadow='2' rounded={'full'} backgroundColor={'gray.50'} onPress={()=>navigation.navigate('balance')}>
<Text>Balance</Text>
</Button>
{/* Cancel Button Section */}
<Button w='75' h='75' shadow='2' rounded={'full'} backgroundColor={color ? 'amber.500' : 'gray.50'} onPress={handleButtonColor}>
<Text>{isActive ? 'Active' : 'Cancel'}</Text>
</Button>
{/* Calories Button Section */}
<Button w='75' h='75' shadow='2' rounded={'full'} backgroundColor={'gray.50'} onPress={()=>navigation.navigate('calories')}>
<Text>Calories</Text>
</Button>
</HStack>
</Box>
</Box> 
    </Box>
)
}
export default HomeTab
import { StepBackwardFilled } from '@ant-design/icons'
import { BackgroundImage } from '@rneui/base'
import { Box, Card, Center, Heading, ScrollView, HStack, Text, Button } from 'native-base'
import React, { useState } from 'react'
import Calories from './Calories'
const Switch = ({ navigation }) => {
  const [color, setColor] = useState(false)
  const [isActive, setActive] = useState(false)
  const handleButtonColor = (color) => {
    setColor(!color)
    setActive(!isActive)
  }

  return (
    <Box alignContent={'space-around'} position={'fixed'} bottom='0' width={'100%'}>
      <Box safeArea='2' p='10'>
        <HStack justifyContent={'space-between'}>
          {/* Cash balance Section */}
          <Button w='75' h='75' shadow='2' rounded={'full'} backgroundColor={'gray.50'} onPress={()=>navigation.navigate('Balance')}>
            <Text>Balance</Text>
          </Button>
          {/* Cancel Button Section */}
          <Button w='75' h='75' shadow='2' rounded={'full'} backgroundColor={color ? 'amber.500' : 'gray.50'} onPress={handleButtonColor}>
            <Text>{isActive ? 'Active' : 'Cancel'}</Text>
          </Button>
          {/* Calories Button Section */}
          <Button w='75' h='75' shadow='2' rounded={'full'} backgroundColor={'gray.50'} onPress={() => navigation.navigate('Calories')}>
            <Text>Calories</Text>
          </Button>
        </HStack>
      </Box>
    </Box>
  )
}
export default Switch


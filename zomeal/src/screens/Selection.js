import { Select, Card, Stack, Content, Container,Center,Heading,Box,CheckIcon } from 'native-base'
import { NativeBaseProvider } from 'native-base';
import React from 'react'

const Selection = () => {
  const [service, setService] = React.useState("");
  const [foodPreference, setFoodPreference] = React.useState(" ")
  return (
    <Center>
      <Heading align='center'>Select your package and service</Heading>
      
      <Box maxW="300">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Your Service" placeholder="Choose Your Service" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Lunch" value="lunch" />
          <Select.Item label="Dinner" value="dinner" />
          <Select.Item label="Both Lunch & Dinner" value="lunch-dinner" />
        </Select>
      </Box>
      <Box maxW="300">
        <Select selectedValue={foodPreference} minWidth="200" accessibilityLabel="Choose Your Service" placeholder="Choose Your Service" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Veg" value="veg" />
          <Select.Item label="Non-Veg" value="non-veg" />
          <Select.Item label="Vegan" value="vegan" />
          <Select.Item label="Customise" value="custom food preference" />
        </Select>
      </Box>
    </Center>
  )
}

export default Selection
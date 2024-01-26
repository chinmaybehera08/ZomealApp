import { Select, Card, Stack, Content, Container,Center,Heading,Box,CheckIcon, Divider, Button } from 'native-base'
import { NativeBaseProvider } from 'native-base';
import React from 'react'

const Selection = () => {
  const [service, setService] = React.useState("");
  const [foodPreference, setFoodPreference] = React.useState(" ")
  return (
    
    <Center w='100%'>
      <Container w='100%' mt='8' py='2' px='8' _light={{bg:"warning.500"}} >
      <Heading align='center' size='md' _light={{color:"muted.50"}}>Select your package and service</Heading>
      </Container>
      <Box  p='10' borderRadius={'md'}>
        <Heading py='1' size={'sm'}>1.Choose Your Package</Heading>
        <Select selectedValue={service} minWidth="290" accessibilityLabel="Student" placeholder="Student" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item style={{borderRadius:20}} label="Student" value="student_package" />
          <Select.Item label="Corporate " value="corporate_package" />
          <Select.Item label="Vendor" value="vendor_package" />
        </Select>
      </Box>
      <Divider w='80%' my='5' _light={{bg:"muted.800"}}_dark={{bg:'muted.50'}}/>
      <Box maxW="300">
        <Heading py='2' size={'sm'}>2.Choose Your Service</Heading>
        <Select selectedValue={service} minWidth="290" accessibilityLabel="Both Lunch & Dinner" placeholder="Both Lunch & Dinner" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Lunch" value="lunch" />
          <Select.Item label="Dinner" value="dinner" />
          <Select.Item label="Both Lunch & Dinner" value="lunch-dinner" />
        </Select>
      </Box>
      <Divider w='80%' my='10' _light={{bg:"muted.800"}}_dark={{bg:'muted.50'}}/>
      <Box maxW="300">
        <Heading py='4' size={'sm'}>3.Food preference</Heading>
        <Select selectedValue={foodPreference} minWidth="290" accessibilityLabel="Non-Veg" placeholder="Non-Veg" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Veg" value="veg" />
          <Select.Item label="Non-Veg" value="non-veg" />
          <Select.Item label="Vegan" value="vegan" />
          <Select.Item label="Customise" value="custom food preference" />
        </Select>
      </Box>
      <Button w='70%' px='10' py='4' mt={'10'} _light={{bg:'warning.500'}}>Next</Button>
    </Center>
  )
}

export default Selection
import { Input, Box, FormControl, ScrollView, TextArea, Button, Text } from 'native-base'
import React from 'react'
const color = 'warning.500'
const AddAddress = ()=>{
return(
    <Box safeArea='2' p='6'>
       <ScrollView>
       <FormControl my='2'>
        <FormControl.Label ml={'2'}>First Name</FormControl.Label>
            <Input placeholder='Enter your First Name'/>
        </FormControl>
        <FormControl my='2'>
            <FormControl.Label ml={'2'}>Last Name</FormControl.Label>
            <Input placeholder='Enter your Last Name'/>
        </FormControl>
        <FormControl my='2'>
            <FormControl.Label ml={'2'}>Contact Number</FormControl.Label>
            <Input type='numeric' keyboardType='numeric' placeholder='Enter your Number'/>
        </FormControl>
        <FormControl my='2'>
            <FormControl.Label ml={'2'}>Alternative Contact Number</FormControl.Label>
            <Input type='numeric' keyboardType='numeric' placeholder='Enter your Number'/>
        </FormControl>
        <FormControl my='2'>
            <FormControl.Label ml={'2'}>Pincode</FormControl.Label>
            <Input type='numeric' keyboardType='numeric' placeholder='Please enter your pincode'/>
        </FormControl>
        <FormControl my='2'>
            <FormControl.Label ml={'2'}>Address</FormControl.Label>
            <TextArea h='40' placeholder='Your Address'/>
        </FormControl>
        <Text alignSelf={'center'}>Or</Text>
        <Button>Submit</Button>
       </ScrollView>
    </Box>
)
}
export default AddAddress
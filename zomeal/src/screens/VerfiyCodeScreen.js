
import React, { useState } from 'react';
import { Container, Content, Form, Item, Input, Button, Text, Toast, Box, Center, Heading } from 'native-base';



const handleVerifyOTP = () => {
    // Perform OTP verification logic here
    // For simplicity, I'm checking if the entered OTP is '1234'
    if (otp === '1234') {
        Toast.show({
            text: 'OTP verified successfully!',
            duration: 3000,
            type: 'success',
        });
    } else {
        Toast.show({
            text: 'Invalid OTP. Please try again.',
            duration: 3000,
            type: 'danger',
        });
    }
};

const VerifyCodeScreen = ({navigation}) => {
    const [otp, setOtp] = useState('');


    return (
        <Center w='100%'>
            <Box safeArea p="2" py="8" w="90%" maxW="290">
             <Heading size="xs" py='4' fontWeight="500" color="coolGray.800" _dark={{
             color: "warmGray.50"
               }}>
             Enter OTP (One Time password)
           </Heading>
         <Input  type='numeric' keyboardType='number-pad' placeholder='Enter your Otp'/>
           
        </Box>
        </Center>
       
    )
};

export default VerifyCodeScreen;

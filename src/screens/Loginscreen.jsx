import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { KeyboardAvoidingView, Box, Card, ScrollView, Divider, LinearGradient, SafeAreaView } from '@gluestack-ui/themed'; // Assuming these are custom styled components
import CustomButton from '../components/CustomButton';
import Textfield from '../components/CustomTextfield';
import CustomText from '../components/CustomText';
import CustomCheckbox from '../components/CustomCheckbox';
import CustomPagination from '../components/CustomAnimationCard';
import CustomDivider from '../components/CustomDivider';
import {primaryBg,secondaryBg,textColor,accentBg, fontSizeMedium, dark,colorGrade1, colorGrade2} from '../constants/Stylesheet'
import {LinearGradient as BVLinearGradient} from 'react-native-linear-gradient'
const coverImage = require('../assets/images/coverImage.png');



const Loginscreen = ({ navigation,handlePress,value,handleChangeText }) => {
  return (
    <KeyboardAvoidingView style={{flex:1}}  behavior="padding">

    
      <Box py={'$40'} >
        <CustomText 
          paddingTop={'$4'} 
          text={'Lets Start !'} 
          justifyContent={'center'} 
          textAlign={'center'} 
          fontSize={30} 
          fontWeight={700}
          color={dark} />
          <CustomDivider width={'70%'} justifyContent={'center'} alignSelf={'center'} paddingAxisY={'$2'}/>
          <Textfield  
             width={'70%'} 
             size={'xl'}   
             color={secondaryBg} 
             labelText={'Phone Number'} 
             keyboardType={'numeric'}
             errorText={'Must be Atleasat 6 Digits.'}
             labelColor={dark}
             value={value}
             handleChangeText={handleChangeText}
             inputFieldColor={textColor}
             fontSize={fontSizeMedium}
            />
          <CustomText color={dark} text={'By loging in, You agree to our Terms and Conditions.'} paddingAxisY={'$2'} justifyContent={'center'} alignSelf={'center'} textAlign={'center'}/>
          <CustomButton variant={'elevated'}  size={'xl'} title={'Send Code'} width={'70%'} height={50} alignSelf={'center'} bgColor={accentBg} color={primaryBg} handlePressEvent={handlePress}/>
      </Box>
</KeyboardAvoidingView>


   
   
  );
};


export default Loginscreen;

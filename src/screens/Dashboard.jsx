import React from 'react'
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient'
import { LinearGradient } from '@gluestack-ui/themed'
import { colorGrade1, colorGrade2 } from '../constants/Stylesheet'
import CustomAnimationCard from '../components/CustomAnimationCard'
const Dashboard=()=>{
return(
    <LinearGradient
    flex={1}
    colors={[colorGrade1,colorGrade2]}
    as={RNLinearGradient}>
    <CustomAnimationCard/>
    </LinearGradient>
)
}
export default Dashboard
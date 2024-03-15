import { LinearGradient } from '@gluestack-ui/themed'
import React from 'react'
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient'
import { colorGrade1, colorGrade2 } from '../constants/Stylesheet'
const FoodPackages=()=>{
return(
    <LinearGradient
    flex={1}
    colors={[colorGrade1,colorGrade2]}
    as={RNLinearGradient}>

    </LinearGradient>
)
}
export default FoodPackages
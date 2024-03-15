import { FormControl, FormControlError,FormControlErrorIcon,FormControlErrorText, AlertCircleIcon, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, InputField,Text,Input,InputSlot } from "@gluestack-ui/themed";
const Textfield=({type, errorText, labelText,handleChangeText,placeholder,inputFieldColor, helperText,keyboardType,size,fontSize,labelFontSize, labelFontWeight,value,bgColor,isInvalid,labelColor, ...props})=>{
return(
<FormControl px='$6' isInvalid={isInvalid}>
    <FormControlLabel py={'$.5'} ml={'$1.5'}>
       <FormControlLabelText fontWeight={labelFontWeight} fontSize={labelFontSize} color={labelColor}>{labelText}</FormControlLabelText>
    </FormControlLabel>
    <Input size={size}>
     <InputSlot style={{backgroundColor:"orange"}} p={'$2'}>
     <Text style={{color:"white"}}>+91</Text>
     </InputSlot>   
    <InputField $focus-bg='white' style={{width:"100%",fontSize:fontSize, color:inputFieldColor, backgroundColor:bgColor}} keyboardType={keyboardType} type={type} onChangeText={handleChangeText} placeholder={placeholder} value={value} {...props}/>
    </Input>
    <FormControlHelper>
            <FormControlHelperText>{helperText}</FormControlHelperText>
    </FormControlHelper>
    <FormControlError>
      <FormControlErrorIcon as={AlertCircleIcon} />
      <FormControlErrorText>
       {errorText}
      </FormControlErrorText>
    </FormControlError>
</FormControl>
)
}
export default Textfield
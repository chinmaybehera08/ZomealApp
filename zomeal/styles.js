import { StyleSheet } from "react-native"
import { useTheme } from "react-native-paper"


const primary = 'black'
const Styling = StyleSheet.create(
   
    {
        primary:{
         color:'#000'
        },
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        
        },
        bottomContainer:{
              flex:1,
              justifyContent:'flex-end',
              alignItems:'center',
              marginBottom:50
        },
        textCenter:{
            textAlign:'center'
        },
        heading:{
            fontSize:20,
            marginTop:30
        },
        forgetPasswordText:{
            color:'secondary',
            fontSize:12.5, 
            textAlign:'right'
        },
        textfield:{
            width:'80%',
            height:50,
            borderRadius:5,
            marginBottom:5,
            borderColor:'white',
        },
        button:{
            width:'80%',
            height:50,
            marginTop:15,
            borderRadius:30,
            lineHeight:50,
            fontSize:25.5,
            color:'white'
        },
        subText:{
            fontSize:10,
            color:primary
        },
        textRight: {
            textAlign:'right'
        },
        green:{
            color:'green'
        }

  }
)
export default Styling
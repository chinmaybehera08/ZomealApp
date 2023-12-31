import {Card, Divider, PaperProvider, TextInput,Text,Button, IconButton} from 'react-native-paper'
import {ScrollView,ToastAndroid,View} from 'react-native'
import Styling from '../../styles'
import LunchMenu from '../menu/LunchMenu'
import CustomInput from '../components/DeliveredAddress'
import OrderHistory from '../components/OrderHistory'
import Billing from '../components/Billing'


const Dashboard = ({navigation, content})=>{
return(
    <PaperProvider>
        <ScrollView>
        <Card style={{width:'95%',marginLeft:'auto',marginRight:'auto',paddingVertical:10,marginVertical:10}}>
        <Card.Content>
            <Text  variant='bodyLarge'>Order History</Text>
        </Card.Content> 
        <OrderHistory/>
        <Card.Content style={{marginVertical:20}}>
            <Text  variant='bodyLarge'>Billing and Payments</Text>
        </Card.Content> 
        <Billing/>
        <Card.Content>
            <Text  variant='bodyLarge'>Delivered Address</Text>
        </Card.Content>
        <CustomInput/>
        <View style={{display:'inline',justifyContent:'flex-end',flexDirection:'row',alignItems:'flex-end'}}>
        <IconButton mode='contained-tonal' icon='pencil'/>
        <IconButton mode='contained-tonal' icon='content-save'onPress={()=>{
            ToastAndroid.show('Details saved successfully',ToastAndroid.SHORT)
        }}/>
        </View>
       </Card>    
   
        </ScrollView>
     
    </PaperProvider>
   
)
}
export default Dashboard
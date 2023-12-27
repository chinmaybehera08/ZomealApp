import {View,Text, ScrollView} from 'react-native'
import Styling from '../../styles'
import { PaperProvider,Card,Button,Avatar} from 'react-native-paper'
import Datatable from '../components/table'

const Menu = ({navigation})=>{
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    /**
     * If the user is logged in the back arrow will be disabled and will enabled the next arrow page
     */
return(
   <PaperProvider>
     <View style={Styling.container}>
     
    </View>
    <ScrollView>
    <Text style={{textAlign:'center',fontSize:20.5,fontWeight:600}}>Flavors of the Month Club</Text>
    <Card style={{width:'95%',marginTop:10, marginBottom:10,marginLeft:'auto',marginRight:'auto'}}>
    <Card.Title title="Our Vegan Delights" subtitle="Indulge in a Symphony of Flavors,Crafted with Compassion and Fresh, Locally-Sourced Ingredients." />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{width:'95%',marginLeft:'auto',marginRight:'auto'}}/>
    <Card.Content>
      <Datatable/>
    </Card.Content>
    <Card.Actions>
     
      <Button mode='contained'>Selected</Button>
    </Card.Actions>
  </Card>
  <Card style={{width:'95%',marginTop:10, marginBottom:10,marginLeft:'auto',marginRight:'auto'}}>
    <Card.Title title="Our Vegan Delights" subtitle="Indulge in a Symphony of Flavors,Crafted with Compassion and Fresh, Locally-Sourced Ingredients." />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{width:'95%',marginLeft:'auto',marginRight:'auto'}}/>
    <Card.Content>
      <Datatable/>
    </Card.Content>
    <Card.Actions>
     
      <Button mode='contained'>Selected</Button>
    </Card.Actions>
  </Card>
    </ScrollView>
   </PaperProvider>
   
)
}
export default Menu
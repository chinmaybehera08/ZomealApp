import React from 'react'
import Styling from '../../styles'
import {View,Text,ScrollView} from 'react-native'
import {Card} from 'react-native-paper'
const Plans=()=>{
return(
    <ScrollView>
     <Card>
        <Card.Title/>
        <Card.Content>
         <Card.Content></Card.Content>
        </Card.Content>
        <Card.Cover/>
        <Card.Actions>
            <Button>Buy Plan</Button>
        </Card.Actions>
     </Card>
    </ScrollView>
)
}
export default  Plans
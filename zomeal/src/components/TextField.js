import {View ,Text,TextInput} from 'react-native'
import Styling from '../../styles'
const TextField = ({ input, meta: { touched, error }, ...custom }) => (
    <View style={{width:'80%'}}>
      <TextInput style={Styling.textfield} {...input} {...custom} />
      {touched && error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
  export default TextField
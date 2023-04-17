import { View, Text, TextInput, StyleSheet, Button} from 'react-native'
import React,{useState} from 'react'

const App = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text style={{fontSize:30}}>App</Text>
      <Text style={{fontSize:30}}>Your name is : {`${name}`}</Text>
      <TextInput
      style={styles.textInput}
      placeholder='Enter Name'
      value={name}
      onChangeText={(text) => setName(text)}
      />
      <Button title='ClearFields Option' onPress={() => setName('')}/>
    </View>
  )
}
const styles = StyleSheet.create({
  textInput:{fontSize:25, color:"red", borderWidth:2, borderColor:"green", margin:10},
});
export default App
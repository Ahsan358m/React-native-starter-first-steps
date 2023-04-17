import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  const resetForm = () =>{
    setDisplay(false);
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <View>
      <Text style={{fontSize:30}}>Simple Form in React Native</Text>
      <TextInput
      style={styles.textInput}
      placeholder='Enter Name'
      onChangeText={(text)=>setName(text)}
      value={name}
      />
      <TextInput
      style={styles.textInput}
      placeholder='Enter Email'
      onChangeText={(text)=>setEmail(text)}
      value={email}
      /> 
      <TextInput
      style={styles.textInput}
      placeholder='Enter Password'
      onChangeText={(text)=>setPassword(text)}
      value={password}
      secureTextEntry={true}
      />
      <View style={styles.formButton}>
      <Button color={"green"} title='Result' onPress={()=>setDisplay(true)}/>
      </View>
      <Button color={"red"} title='Reset' onPress={()=>resetForm()} />
      {/* Styles dont work on button */}
      {
        display?
        <View>
          <Text style={styles.textstyle}>Username is : {name}</Text>
          <Text style={styles.textstyle}>Email is : {email}</Text>
          <Text style={styles.textstyle}>Password is : {password}</Text>
        </View>
        :null
      }
    </View>
  )
}
const styles = StyleSheet.create({
textInput:{
  fontSize:25,
  color:"blue",
  borderWidth:2,
  borderColor:"cyan",
  margin:10,
  paddingLeft:30,
},
formButton:{
  marginBottom: 10,
},
textstyle:{
  fontSize:20,
}
});
export default App
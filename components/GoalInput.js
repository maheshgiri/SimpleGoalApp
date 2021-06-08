import React,{useState} from "react";
import { View ,TextInput,Button,StyleSheet, TouchableOpacity} from "react-native";


const GoalInput = props=>{
    const [enteredGoal,setEnteredGoal]=useState('')
    const goalInputHandler=(enteredText)=>{
        setEnteredGoal(enteredText);
       }
    return(
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
     <Button title="ADD" onPress={()=>props.addGoalHandler(enteredGoal)}/>
          </View>
    )
}
const styles=StyleSheet.create({
    inputContainer:
  {flexDirection:'row',justifyContent:'space-around',alignItems:'center'},
  input:{width:'80%',borderColor:'black',padding:10,borderWidth:1},

})
export default GoalInput;
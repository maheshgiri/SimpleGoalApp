import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, TextInput,Button,Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {

const [enteredGoal,setEnteredGoal]=useState('')
const [courseGoals,setCourseGoals]=useState([])
const goalInputHandler=(enteredText)=>{
 setEnteredGoal(enteredText);
}
const addGoalHandler=()=>{
console.log(enteredGoal);
setCourseGoals(courseGoals=>[...courseGoals,{'id':Math.random().toString(),'value':enteredGoal}]);
}

  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
    <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
 <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <FlatList keyExtractor={(item,index)=>item.id} data={courseGoals} renderItem={itemData=>(<View style={styles.listItem}  ><Text>{itemData.item.value}</Text></View>)}>
      </FlatList>
    </View>
  );
}

const styles=StyleSheet.create({
 main:{
  marginTop:50
 },
 inputContainer:
  {flexDirection:'row',justifyContent:'space-around',alignItems:'center'},
  input:{width:'80%',borderColor:'black',padding:10,borderWidth:1},
listItem:{
padding:10,
margin:4,
backgroundColor:'grey',
borderColor:'black',
borderWidth:1,
marginVertical:10
}

})


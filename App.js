import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, TextInput,Button,Text, View, ScrollView, FlatList,Touchable, TouchableOpacity } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

const [courseGoals,setCourseGoals]=useState([])

const addGoalHandler=(enteredGoal)=>{
 console.log(enteredGoal);
 setCourseGoals(courseGoals=>[...courseGoals,{'id':Math.random().toString(),'value':enteredGoal}]);
 }

 const onDelete=(item)=>{
 setCourseGoals(currentCourseGoals=>{
   return currentCourseGoals.filter(goalitem=>goalitem.id!==item.id);
 })
}
  return (
    <View style={styles.main}>
     <GoalInput addGoalHandler={addGoalHandler}/>
      <FlatList keyExtractor={(item,index)=>item.id} data={courseGoals} renderItem={itemData=>(<GoalItem onDelete={onDelete} itemData={itemData}/>)}>
      </FlatList>
    </View>
  );
}

const styles=StyleSheet.create({
 main:{
  marginTop:50
 },
 

})


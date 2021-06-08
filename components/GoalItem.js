import React from 'react'
import { View ,StyleSheet,Text,TouchableOpacity} from "react-native"



const GoalItem=props=>{

    return(
        <TouchableOpacity onPress={props.onDelete.bind(this,props.itemData.item)}>

        <View style={styles.listItem}  >
            <Text>{props.itemData.item.value}</Text>
            </View>
            </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    listItem:{
        padding:10,
        margin:4,
        backgroundColor:'grey',
        borderColor:'black',
        borderWidth:1,
        marginVertical:10
        }
})

export default GoalItem;
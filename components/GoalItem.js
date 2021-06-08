import React from 'react'
import { View ,StyleSheet,Text} from "react-native"



const GoalItem=props=>{

    return(
        <View style={styles.listItem}  >
            <Text>{props.itemData.item.value}</Text>
            </View>
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
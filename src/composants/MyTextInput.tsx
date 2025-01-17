import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const MyTextInput = ({...props}) => {
  return (
    <View style={styles.container}>

      <TextInput  style={styles.input} {...props}/> 

      <View style={styles.border}></View>

      
    </View>
  )
}

export default MyTextInput

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 10,
        borderWidth: 0.9,

        
    },
    input: {
        height: 50,
        width: "100%",
        borderRadius: 10,
       

    },
    border: {
        height: 1,
        width: "100%",
        backgroundColor: "gray",
        marginVertical: 10,
        alignSelf: "center",
        
    }
})
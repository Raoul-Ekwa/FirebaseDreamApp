import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { Colors } from '../../constant/Colors'


interface Props {
    title: string;
} 
const MyButton : FC<Props>  = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ff0036',
      borderRadius: 30,
      height: 50,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 20,

    },
    titleText: {
        fontFamily: "Redressed-Regular",
        color: Colors.white,
        fontSize: 16,
    },
  
})
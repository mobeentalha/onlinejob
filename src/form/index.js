import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const abc = (text) => {
    const name = text;
    console.log("name : ", name)
    
  }
  
  export default function form() {
    return(
        <>
            <Text> Name :  </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', width: "80%", borderWidth: 1 }}
                onChangeText={text => abc(text)}    
            />
        </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
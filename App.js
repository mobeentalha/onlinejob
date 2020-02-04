import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { render } from 'react-dom';
import Form from './src/form/index.js'


export default function App() {
  return(
    <View style={styles.container}>
      <Form />
    </View>
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

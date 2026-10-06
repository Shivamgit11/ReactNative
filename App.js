import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ColorBox from './src/components/ColorBox';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Boxes</Text>

      <ColorBox color="red" />
      <ColorBox  color="blue" />
      <ColorBox color="green" />

 
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,    
  },
  header: {
    fontSize:20,
    fontWeight: '700',
    marginBottom: 10,
  },
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    // backgroundColor: 'red',
  },
  redBox: {
    backgroundColor: 'red',
  },
  greenBox: {
    backgroundColor: 'green',   
  },
  blueBox: {
    backgroundColor: 'blue',   
  },
  violetBox: {
    backgroundColor: 'violet',   
  },
})
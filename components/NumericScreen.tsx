import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NumericScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, this is the Numeric screen!</Text>
    </View>
  );
};

export default NumericScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

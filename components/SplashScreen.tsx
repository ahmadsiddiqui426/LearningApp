// components/SplashScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>KiddoLearn</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#e50914', // Bold red color like Netflix logo
    fontSize: 35, // Large font size
    fontWeight: 'bold',
    fontFamily: 'sans-serif', // Netflix uses a sans-serif font
  },
});

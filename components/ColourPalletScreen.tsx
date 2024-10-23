import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColourPalletScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, this is the Colour Pallet screen!</Text>
    </View>
  );
};

export default ColourPalletScreen;

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
  
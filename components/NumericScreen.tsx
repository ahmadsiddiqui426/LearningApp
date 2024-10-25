import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

const numbers = Array.from({ length: 20 }, (_, i) => (i + 1).toString());

const NumericScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Learn the Numbers</Text>
      <FlatList
        data={numbers}
        renderItem={({ item }) => (
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item}
        numColumns={4} // Display numbers in a grid of 4 columns
        contentContainerStyle={styles.numberGrid}
      />
    </View>
  );
};

export default NumericScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: width * 0.07, // Scales with screen width
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  numberGrid: {
    justifyContent: 'center',
  },
  numberContainer: {
    backgroundColor: '#4caf50',
    padding: width * 0.05, // Dynamic padding
    margin: width * 0.02, // Dynamic margin
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.2, // Width based on screen width
    height: width * 0.2, // Square shape based on screen width
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4, // Shadow for Android
  },
  numberText: {
    fontSize: width * 0.08, // Scales with screen width
    fontWeight: 'bold',
    color: '#fff',
  },
});

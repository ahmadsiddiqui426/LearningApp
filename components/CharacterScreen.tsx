import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const CharacterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Learn the Alphabet</Text>
      <FlatList
        data={alphabet}
        renderItem={({ item }) => (
          <View style={styles.letterContainer}>
            <Text style={styles.letterText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item}
        numColumns={4} // Display letters in a grid of 4 columns
        contentContainerStyle={styles.alphabetGrid}
      />
    </View>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: width * 0.07, // Scales with screen width
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  alphabetGrid: {
    justifyContent: 'center',
  },
  letterContainer: {
    backgroundColor: '#ffeb3b',
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
  letterText: {
    fontSize: width * 0.08, // Scales with screen width
    fontWeight: 'bold',
    color: '#333',
  },
});

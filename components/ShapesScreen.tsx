import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

// Define shape styles first
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    paddingTop: 20,
  },
  headerText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  shapeGrid: {
    justifyContent: 'center',
  },
  shapeItem: {
    alignItems: 'center',
    margin: width * 0.04,
  },
  shapeBox: {
    width: width * 0.25,
    height: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shapeText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  // Shape styles
  circle: {
    borderRadius: width * 0.125,
    backgroundColor: '#FF6347',
  },
  square: {
    backgroundColor: '#4682B4',
  },
  rectangle: {
    height: width * 0.15,
    backgroundColor: '#32CD32',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: width * 0.125,
    borderRightWidth: width * 0.125,
    borderBottomWidth: width * 0.25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFD700',
    backgroundColor: 'transparent',
  },
  oval: {
    width: width * 0.3,
    height: width * 0.2,
    borderRadius: width * 0.15,
    backgroundColor: '#FF69B4',
  },
  diamond: {
    width: width * 0.18,
    height: width * 0.18,
    backgroundColor: '#8A2BE2',
    transform: [{ rotate: '45deg' }],
  },
});

// Define the shapes array after styles
const shapes = [
  { name: 'Circle', style: styles.circle },
  { name: 'Square', style: styles.square },
  { name: 'Rectangle', style: styles.rectangle },
  { name: 'Triangle', style: styles.triangle },
  { name: 'Oval', style: styles.oval },
  { name: 'Diamond', style: styles.diamond },
];

const ShapesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Explore Shapes</Text>
      <FlatList
        data={shapes}
        renderItem={({ item }) => (
          <View style={styles.shapeItem}>
            <View style={[styles.shapeBox, item.style]} />
            <Text style={styles.shapeText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={styles.shapeGrid}
      />
    </View>
  );
};

export default ShapesScreen;

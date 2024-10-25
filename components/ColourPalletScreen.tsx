import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

const colors = [
  { name: 'Red', color: '#FF0000' },
  { name: 'Blue', color: '#0000FF' },
  { name: 'Green', color: '#008000' },
  { name: 'Yellow', color: '#FFFF00' },
  { name: 'Purple', color: '#800080' },
  { name: 'Orange', color: '#FFA500' },
  { name: 'Pink', color: '#FFC0CB' },
  { name: 'Cyan', color: '#00FFFF' },
  { name: 'Brown', color: '#A52A2A' },
  { name: 'Gray', color: '#808080' },
  { name: 'Black', color: '#000000' },
  { name: 'White', color: '#FFFFFF' },
];

const ColourPalletScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Explore Colors</Text>
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <View style={styles.colorItem}>
            <View style={[styles.colorBox, { backgroundColor: item.color }]} />
            <Text style={styles.colorText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
        numColumns={3}
        contentContainerStyle={styles.colorGrid}
      />
    </View>
  );
};

export default ColourPalletScreen;

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
  colorGrid: {
    justifyContent: 'center',
  },
  colorItem: {
    alignItems: 'center',
    margin: width * 0.02,
  },
  colorBox: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  colorText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
});

//components/HomeScreen.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from "../app/contexts/ThemeContext"; // Reuse the theme
import { RootStackParamList } from './navigation/types'; // Adjust the import path accordingly
import { StackNavigationProp } from '@react-navigation/stack';

// Define the props for HomeScreen
interface HomeScreenProps {
  setCurrentScreen: React.Dispatch<React.SetStateAction<string>>;
}

const cardsData = [
  { id: 1, image: require('../assets/images/character.png'), label: 'Character' },
  { id: 2, image: require('../assets/images/numeric.png'), label: 'Numeric' },
  { id: 3, image: require('../assets/images/color.jpg'), label: 'Colour Pallet' },
  { id: 4, image: require('../assets/images/shapes.webp'), label: 'Shapes' },
  { id: 5, image: require('../assets/images/animals.png'), label: 'Animals' },
  { id: 6, image: require('../assets/images/birds.jpg'), label: 'Birds' },
];

const HomeScreen: React.FC<HomeScreenProps> = ({ setCurrentScreen }) => {
  const { colors } = useTheme(); // Using the dark or light theme

  // Handle navigation when a card is clicked
  const handleCardPress = (cardId: number) => {
    switch (cardId) {
      case 1:
        setCurrentScreen('Character');
        break;
      case 2:
        setCurrentScreen('Numeric');
        break;
      case 3:
        setCurrentScreen('ColourPallet');
        break;
      case 4:
        setCurrentScreen('Shapes');
        break;
      case 5:
        setCurrentScreen('Animals');
        break;
      case 6:
        setCurrentScreen('Birds');
        break;
      default:
        console.log('Unknown card ID');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {cardsData.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[styles.card, { backgroundColor: colors.cardBackground }]}
            onPress={() => handleCardPress(card.id)}
          >
            <Image source={card.image} style={styles.image} />
            <Text style={[styles.label, { color: colors.text }]}>{card.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Ensures items wrap into the next line for 3 rows and 2 columns
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  card: {
    width: '45%', // Adjusts for two cards per row with some spacing
    marginVertical: 15,
    alignItems: 'center',
    borderRadius: 15, // Curved edges
    overflow: 'hidden', // Ensures image and text stay within the card boundary
    elevation: 4, // Adds a shadow to the card on Android
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  label: {
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

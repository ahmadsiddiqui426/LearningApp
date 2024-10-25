// components/AnimalsScreen.tsx
import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Animated, ImageSourcePropType } from 'react-native';
import { useTheme } from "../app/contexts/ThemeContext";
import { Audio } from 'expo-av';

const lionSound = require('../assets/sounds/lion_roar.mp3');
const elephantSound = require('../assets/sounds/elephant_sound.mp3');
const dogSound = require('../assets/sounds/dog_bark.mp3');

const animals = [
  { name: 'Lion', image: require('../assets/images/lion.jpg'), sound: lionSound },
  { name: 'Elephant', image: require('../assets/images/elephant.jpg'), sound: elephantSound },
  { name: 'Dog', image: require('../assets/images/dog.jpg'), sound: dogSound },
];

const AnimalsScreen: React.FC = () => {
  const { colors } = useTheme();
  const soundRef = useRef<Audio.Sound | null>(null);

  const playSound = async (sound: any) => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(sound);
    soundRef.current = newSound;
    await newSound.playAsync();
  };

  // Define the props for the AnimalCard component
  interface AnimalCardProps {
    name: string;
    image: ImageSourcePropType;
    sound: any;
  }

  const AnimalCard: React.FC<AnimalCardProps> = ({ name, image, sound }) => {
    const scaleValue = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
      Animated.spring(scaleValue, {
        toValue: 0.95,
        useNativeDriver: true,
      }).start();
    };

    const handlePressOut = () => {
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
      playSound(sound);
    };

    return (
      <TouchableOpacity onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
          <Image source={image} style={styles.image} />
        </Animated.View>
        <Text style={[styles.text, { color: colors.text }]}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.headerText}>Animals</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {animals.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            image={animal.image}
            sound={animal.sound}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default AnimalsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

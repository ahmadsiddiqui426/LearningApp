import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AnimalCard from './AnimalCard';
import Header from './Header';
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

const AnimalList = () => {
  const { colors } = useTheme();
  const soundRef = React.useRef<any>(null);

  const playSound = async (sound: any) => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(sound);
    soundRef.current = newSound;
    await newSound.playAsync();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {animals.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            image={animal.image}
            sound={animal.sound}
            onPlaySound={playSound}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default AnimalList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
});

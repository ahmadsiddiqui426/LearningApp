// components/BirdsScreen.tsx
import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Animated, ImageSourcePropType } from 'react-native';
import { useTheme } from "../app/contexts/ThemeContext";
import { Audio } from 'expo-av';

// Replace with appropriate bird sounds
const eagleSound = require('../assets/sounds/eagle_sound.mp3');
const parrotSound = require('../assets/sounds/parrot_sound.mp3');
const owlSound = require('../assets/sounds/cowl_sound.mp3');

const birds = [
  { name: 'Eagle', image: require('../assets/images/eagle.jpg'), sound: eagleSound },
  { name: 'Parrot', image: require('../assets/images/parrot.jpg'), sound: parrotSound },
  { name: 'Owl', image: require('../assets/images/owl.jpg'), sound: owlSound },
];

const BirdsScreen: React.FC = () => {
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

  // Define the props for the BirdCard component
  interface BirdCardProps {
    name: string;
    image: ImageSourcePropType;
    sound: any;
  }

  const BirdCard: React.FC<BirdCardProps> = ({ name, image, sound }) => {
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
      <Text style={styles.headerText}>Birds</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {birds.map((bird, index) => (
          <BirdCard
            key={index}
            name={bird.name}
            image={bird.image}
            sound={bird.sound}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default BirdsScreen;

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

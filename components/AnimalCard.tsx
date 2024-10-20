import React, { useRef } from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, Animated, ImageSourcePropType } from 'react-native';
import { useTheme } from "../app/contexts/ThemeContext";

interface AnimalCardProps {
  name: string;
  image: ImageSourcePropType;
  sound: any;
  onPlaySound: (sound: any) => void;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ name, image, sound, onPlaySound }) => {
  const { colors } = useTheme();
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
    onPlaySound(sound);
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

export default AnimalCard;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});

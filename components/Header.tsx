// components/Header.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from "../app/contexts/ThemeContext";
import Icon from 'react-native-vector-icons/MaterialIcons';

// Update the props to accept setCurrentScreen
interface HeaderProps {
  setCurrentScreen: (screen: string) => void; // Accept a function prop
}

const Header: React.FC<HeaderProps> = ({ setCurrentScreen }) => {
  const { toggleTheme, isDarkMode } = useTheme();

  // Function to handle back navigation
  const handleHomePress = () => {
    setCurrentScreen('Home'); // Use setCurrentScreen to navigate to Home
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleHomePress}>
        <Icon
          name="home" // Home icon
          size={30}
          color={isDarkMode ? '#fff' : '#333'}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Kids Learning</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Icon
          name={isDarkMode ? 'wb-sunny' : 'nightlight-round'}
          size={30}
          color={isDarkMode ? '#fff' : '#333'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#e50914',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;

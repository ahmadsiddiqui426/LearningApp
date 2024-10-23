// components/Header.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from "../app/contexts/ThemeContext";
import { useNavigation } from '@react-navigation/native'; 
import { StackNavigationProp } from '@react-navigation/stack'; // Import the StackNavigationProp
import { RootStackParamList } from './navigation/types'; // Adjust the import path accordingly
import Icon from 'react-native-vector-icons/MaterialIcons';

// Define the type for your navigation prop
type HeaderNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Header: React.FC = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const navigation = useNavigation<HeaderNavigationProp>(); // Specify the type here

  // Function to handle back navigation
  const handleBackPress = () => {
    navigation.navigate('Home'); // Navigate to the Home screen
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleBackPress}>
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

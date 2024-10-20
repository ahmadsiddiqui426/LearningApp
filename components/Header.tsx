// components/Header.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from "../app/contexts/ThemeContext";
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header: React.FC = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Animal Sounds App</Text>
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
    backgroundColor: '#f0f8ff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, BackHandler } from 'react-native';
import { ThemeProvider } from "./contexts/ThemeContext";
import SplashScreen from '../components/SplashScreen';
import HomeScreen from '../components/HomeScreen';
import CharacterScreen from '../components/CharacterScreen';
import NumericScreen from '../components/NumericScreen';
import ColourPalletScreen from '../components/ColourPalletScreen';
import ShapesScreen from '../components/ShapesScreen';
import AnimalsScreen from '../components/AnimalsScreen';
import BirdsScreen from '../components/BirdsScreen';
import Header from '../components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('Home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleBackButton = () => {
    if (currentScreen !== 'Home') {
      setCurrentScreen('Home'); // Navigate back to Home
      return true; // Prevent default back behavior
    }
    return false; // Allow default back behavior (exit the app)
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [currentScreen]);

  if (isLoading) {
    return <SplashScreen />;
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen setCurrentScreen={setCurrentScreen} />;
      case 'Character':
        return <CharacterScreen />;
      case 'Numeric':
        return <NumericScreen />;
      case 'ColourPallet':
        return <ColourPalletScreen />;
      case 'Shapes':
        return <ShapesScreen />;
      case 'Animals':
        return <AnimalsScreen />;
      case 'Birds':
        return <BirdsScreen />;
      default:
        return <HomeScreen setCurrentScreen={setCurrentScreen} />;
    }
  };

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        {renderScreen()}
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

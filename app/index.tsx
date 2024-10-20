// app/index.tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AnimalList from "../components/AnimalList";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <AnimalList />
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

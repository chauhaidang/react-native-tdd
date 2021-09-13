import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import RestaurantList from './components/RestaurantList';
const App = () => {
  return (
    <SafeAreaView>
      <RestaurantList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

import React from 'react';
import {Text, View } from 'react-native';
import Rpost from './src/components/Rpost';
import CarInformation from './src/assets/data/CarInformation';
import CarSearchResults from './src/screens/SearchResults/CarSearchResults';

export default function App() {
  return (
    <View>
      <CarSearchResults/>
    </View>
  );
};


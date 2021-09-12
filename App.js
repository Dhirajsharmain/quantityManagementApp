/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useColorScheme, SafeAreaView, ScrollView } from 'react-native';
import AppBar from './src/components/header';
import LengthMeasurement from './src/components/length';
import TempMeasurement from './src/components/temperature';
import VolumeMeasurement from './src/components/volume';




const App =  () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style= {{flex:1, backgroundColor: '#F5F6FA'}}>
      <AppBar></AppBar>
      <LengthMeasurement/>
      {/* <TempMeasurement/> */}
      {/* <VolumeMeasurement/> */}
    </SafeAreaView> 
  );
};


export default App;

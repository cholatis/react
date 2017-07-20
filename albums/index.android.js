//Index.ios.js - place code in here for ios

// Import a library to help create a Component
import React from 'react';
//import ReactNative from 'react-native';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a Component
/*
const App = () => {
  return(
    <Text>Some text</Text>
  );
};
*/
// flex: 1 for span entire list ScrollView
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
);

// Render it to the device
// () => App
// return function from App
//ReactNative.AppRegistry.registerComponent('albums', () => App);
AppRegistry.registerComponent('albums', () => App);

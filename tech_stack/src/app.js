import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

// Provider will allow only 1 child need to change View to cover Header
//<Provider store={createStore(reducers)}>
//  <Header headerText="Tech Stack" />
//  <View />
//</Provider>

// {{ flex: 1 }}  first curly brace is for JSX another one for designated javascript object
const App = () => {
  return(
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};


export default App;

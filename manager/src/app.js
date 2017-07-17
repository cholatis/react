import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

//store={createStore()} should have at least 1 reducer
class App extends Component {
  componentWillMount() {
      const config = {
      apiKey: 'AIzaSyCX3VjeNawK0hSHwnXMiNpSmd0pY799oFQ',
      authDomain: 'manager-3c17b.firebaseapp.com',
      databaseURL: 'https://manager-3c17b.firebaseio.com',
      projectId: 'manager-3c17b',
      storageBucket: '',
      messagingSenderId: '586355136983'
    };
    firebase.initializeApp(config);
  }


  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

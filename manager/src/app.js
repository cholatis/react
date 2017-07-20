import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; //applyMiddleware use with middleware such as ReduxThunk
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

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

// Previously under Provider is <LoginForm />
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

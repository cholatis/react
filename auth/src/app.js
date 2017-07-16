import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection a} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  //state = { loggedIn: false };
  state = { loggedIn: null }; //set null for not show login form when check onAuthStateChanged


  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCIZA6tsjWbtem9lUtIOBGebnE95rt6i9M',
      authDomain: 'authentication-fe183.firebaseapp.com',
      databaseURL: 'https://authentication-fe183.firebaseio.com',
      projectId: 'authentication-fe183',
      storageBucket: 'authentication-fe183.appspot.com',
      messagingSenderId: '5857277533'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    //console.log(this.state.loggedIn);
    switch (this.state.loggedIn) {
      case true:
        //return <Button>Log Out</Button>;

        return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />; // don't know onAuthStateChanged yet
    }
    /*
    if(this.state.loggedIn) {
      return(
        <Button>
          Log Out
        </Button>
      );

    }

    return <LoginForm />;
    */
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        { this.renderContent() }

      </View>
    );
  }
}

export default App;

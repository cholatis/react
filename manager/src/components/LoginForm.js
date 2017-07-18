import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'; // import Action Creator
import { Card, CardSection, Input, Button, Spinner } from './common';


class LoginForm extends Component {
  // Call Action Creator with new text
  onEmailChange(text) {
    this.props.emailChanged(text); //Action Creator return an action

  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>

    );
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label = "Email"
            placeHolder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)} //event handler to watch user type something
            value = {this.props.email}
            />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label = "Password"
            placeHolder = "password"
            onChangeText={this.onPasswordChange.bind(this)}
            value = {this.props.password}
            />
        </CardSection>

        <Text style={styles.errorTextStyle}>
        {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

//const mapStateToProps = state => {
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  };
};

// bind Action Creator to connect
export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);

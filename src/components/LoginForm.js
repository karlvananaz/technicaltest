import React from 'react';
import firebase from 'firebase';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

class LoginForm extends React.Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '' });

    firebase.auth.signInWithEmailAndPassword(email, password)
    .catch(() => {
      firebase.auth.createUserWithEmailAndPassword(email, password)
      .catch(() => {
        this.setState({ error: 'Authentication Failed' });
      });
    });
  }

  render() {
    const { container, input, buttonContainer, buttonText } = styles;
    return (
      <View style={container}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Email</Text>
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="Input email address"
            style={input}
          />
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Password</Text>
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Input password"
            secureTextEntry
            style={input}
          />

          <TouchableOpacity onPress={} style={buttonContainer}>
            <Text style={buttonText}>Sign In</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    padding: 20
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 25,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#9b59b6',
    borderRadius: 10,
    fontStyle: 'italic'
  },
  buttonContainer: {
    backgroundColor: '#9b59b6',
    paddingVertical: 10,
    height: 60,
    borderRadius: 10
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 30
  }
};

export default LoginForm;

import React from 'react';
import { View, Image } from 'react-native';
import LoginForm from './LoginForm';

class Login extends React.Component {
  render() {
    const { logoContainer } = styles;
    return (
      <View>
        <View style={logoContainer}>
          <Image
            source={require('../../src/images/Logo.png')}
          />
        </View>
        <View>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = {
  logoContainer: {
    marginTop: 75,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Login;

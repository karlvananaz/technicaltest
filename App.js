import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Login from './src/components/Login';

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBL0qVOEQnIzU8Stp3yQflh6V9tBDNOS5c',
    authDomain: 'auth-b54b9.firebaseapp.com',
    databaseURL: 'https://auth-b54b9.firebaseio.com',
    projectId: 'auth-b54b9',
    storageBucket: 'auth-b54b9.appspot.com',
    messagingSenderId: '839840404871'
    });
  }

  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}

export default App;

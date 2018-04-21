import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList, ListView } from 'react-native';

const MainView = require('./MainView');
const LoginView = require('./LoginView');


firebase = require('./firebase');

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        authenticated: true,
        uid: null,
        displayName: 'Anonymous'
      }
    }
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  listenForItems(itemsRef) {
    that = this;

    // 認証時のコールバック
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        that.setState({
          user: {
            authenticated: true,
            uid: user.uid,
            displayName: user.displayName,
          }
        });
      }
    });

  }

  render() {
    return (
      <View>
        {this.state.user.authenticated ?
          <MainView/>
          :
          <LoginView />
        }
      </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

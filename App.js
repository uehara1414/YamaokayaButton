import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList, ListView } from 'react-native';
import { Permissions, Notifications } from 'expo';

const MainView = require('./ui/MainView');
const LoginView = require('./ui/LoginView');
const registerForPushNotificationsAsync = require('./notifications');

const SETTINGS = require('./settings.json');

firebase = require('./firebase');

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.userRef = firebase.database().ref(SETTINGS.FIREBASE_DB_PREFIX + 'users/');

    this.state = {
      user: {
        authenticated: false,
        uid: null,
        displayName: 'Anonymous'
      },
      users: [],
    }
  }

  setExponentPushToken(uid, token) {
    let ref = firebase.database().ref(SETTINGS.FIREBASE_DB_PREFIX + 'users/' + uid);
    ref.update({
      'ExponentPushToken': token
    });
  }

  listenForUsers(usersRef) {
    usersRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          uid: child.val().uid,
          displayName: child.val().displayName,
          ExponentPushToken: child.val().ExponentPushToken
        });
      });

      this.setState({
        users: items
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
    this.listenForUsers(this.userRef);
    this.listeners = Notifications.addListener(this.onPushNotification);
  }

  onPushNotification (notifications) {
    console.log(notifications);
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

        let ref = firebase.database().ref(SETTINGS.FIREBASE_DB_PREFIX + 'users/' + user.uid);
        ref.update({
          'displayName': user.displayName
        });

        registerForPushNotificationsAsync((token) => {
          that.setExponentPushToken(user.uid, token);
        });

      }
    });

  }

  render() {
    return (
      <View>
        {this.state.user.authenticated ?
          <MainView
            users={this.state.users}
          />
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

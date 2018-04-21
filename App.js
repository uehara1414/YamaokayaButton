import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import * as firebase from 'firebase';

// Initialize Firebase
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

function storeHighScore() {
  firebase.database().ref('yamaokaya-dev/' + 'testList').push({
    comment: 'こめんとぉ' + Math.random().toString()
  });

}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>OISHII RAMEN FOUND!</Text>
        <Button
          onPress={storeHighScore}
          title="募集をかける"
          color="#841584"
          accessibilityLabel="募集する"
        />
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

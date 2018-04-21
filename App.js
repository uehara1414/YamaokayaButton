import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import * as firebase from 'firebase';

// Initialize Firebase
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
let hoge = 'hoge';

function storeHighScore() {
  firebase.database().ref('yamaokaya-dev/' + 'testList').push({
    comment: 'こめんとぉ' + Math.random().toString()
  });

}

setupHighscoreListener(userId) {
  firebase.database().ref('users/' + userId).on('value', (snapshot) => {
    const highscore = snapshot.val().highscore;
    console.log("New high score: " + highscore);
  });
}

class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={firebase.database().ref('yamaokaya-dev/' + 'testList').limitToLast(2)}
          renderItem={({item}) => <Text style={styles.container}>{toString(item)}</Text>}
        />
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>OISHII RAMEN FOUND!{hoge}</Text>
        <Button
          onPress={storeHighScore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <FlatListBasics />
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

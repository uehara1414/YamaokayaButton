import React, { Component } from 'react';
// import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Container, Content, List, ListItem, Text, Left, Body, Right, Title, Icon, Switch } from 'native-base';
import { Header } from './components/Header'

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
      <Container>
        <Header></Header>

      </Container >
    );
  }

}

/*
 <Content>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem >
              <Text>Aaron Bennet</Text>
            </ListItem>
          </List>
        </Content>
*/
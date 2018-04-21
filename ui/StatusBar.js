'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const { StyleSheet, Text, View} = ReactNative;

class StatusBar extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

module.exports = StatusBar;
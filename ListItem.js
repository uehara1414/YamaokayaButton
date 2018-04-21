import React, {Component} from 'react';
import ReactNative from 'react-native';

const { View, TouchableHighlight, Text } = ReactNative;

class ListItem extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.item.comment}</Text>
      </View>
    );
  }
}

module.exports = ListItem;
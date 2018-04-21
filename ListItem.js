import React, {Component} from 'react';
import ReactNative from 'react-native';

const { View, TouchableHighlight, Text } = ReactNative;

class ListItem extends Component {
  render() {
    return (
      <View>
        <Text>店舗名　函館鍛冶店</Text>
        <Text>日時 2018/04/28 18:00</Text>
        <Text>{this.props.item.comment}</Text>
      </View>
    );
  }
}

module.exports = ListItem;
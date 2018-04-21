import React, {Component} from 'react';
import ReactNative from 'react-native';

const { View, TouchableHighlight, Text, Button, ListView } = ReactNative;

const ListItem = require('./ListItem');
const StatusBar = require('./StatusBar');

firebase = require('./firebase');

function storeHighScore() {
  firebase.database().ref('yamaokaya-dev/' + 'testList').push({
    comment: 'こめんとぉ' + Math.random().toString()
  });
}

class MainView extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = firebase.database().ref('yamaokaya-dev/testList');
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  _renderItem(item) {
    return (
      <ListItem item={item} />
    );
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          comment: child.val().comment,
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  render() {
    return (
      <View>
        <StatusBar title="Grocery List" />
        <Button
          onPress={storeHighScore}
          title="Learn More2"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} />
      </View>
    );
  }
}

module.exports = MainView;
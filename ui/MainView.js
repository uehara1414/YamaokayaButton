import React, {Component} from 'react';
import ReactNative from 'react-native';

const { View, TouchableHighlight, Text, Button, ListView } = ReactNative;

const ListItem = require('./ListItem');
const StatusBar = require('./StatusBar');
const AddModal = require('./AddModal');
const JoinModal = require('./JoinModal');

firebase = require('../firebase');

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
      }),
      addModalVisible: false,
      joinModalVisible: false,
    };
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  _renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {this.setState({joinModalVisible: true})}} />
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

  addRecruit() {
    this.setState({
      addModalVisible: false,
    })
  }

  join() {
    this.setState({
      joinModalVisible: false,
    })
  }

  render() {
    return (
      <View>
        <StatusBar title="Grocery List" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
        />

        <Button
          onPress={() => {this.setState({addModalVisible: true})}}
          title="募集をかける"
          color="#841584"
          accessibilityLabel="Recruit"
        />
        <AddModal
          visible={this.state.addModalVisible}
          onPress={() => {this.addRecruit()}}
        />
        <JoinModal
          visible={this.state.joinModalVisible}
          onPress={() => {this.join()}}
        />
      </View>
    );
  }
}

module.exports = MainView;
import React, { Component } from 'react';
import { Animated, Modal, Text, TextInput, Picker, Button, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = { shop: '', time: '', comment: '' };
  }
  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.visible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <Text>募集するよ</Text>

            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(text) => this.setState({ shop })}
              value={this.state.shop}
              placeholder='店舗名を入力して下さい'
            />
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(text) => this.setState({ time })}
              value={this.state.time}
              placeholder='時間を入力して下さい'
            />
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(text) => this.setState({ comment })}
              value={this.state.comment}
              placeholder='コメントを入力して下さい（任意）'
            />

            <Button
              title="募集をかける"
              onPress={() => {
                this.props.onPress()
              }}>
            </Button>

          </View>
        </Modal>
      </View>
    );
  }
}
module.exports = AddModal;
/*
<Picker.Item label="上磯店" value="KAMIISO" />
<Picker.Item label="函館鍛冶店" value="KAJI" />
<Picker.Item label="函館万代店" value="MANDAI" />
*/
import React, { Component } from 'react';
import { Modal, Text, TextInput, Button, View } from 'react-native';

class JoinModal extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
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
            <View>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => this.setState({ comment })}
                value={this.state.comment}
                placeholder='コメントを入力して下さい（任意）'
              />

              <Button
                title="参加"
                onPress={() => {
                  this.props.onPress()
                }}>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

module.exports = JoinModal;
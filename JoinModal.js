import React, {Component} from 'react';
import {Modal, Text, Button, View} from 'react-native';

class JoinModal extends Component {
  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.visible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>参加する！！！</Text>

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
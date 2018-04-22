import React, {Component} from 'react';
import {Modal, Text, Button, View} from 'react-native';

class AddModal extends Component {
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
              <Text>募集するよ</Text>

              <Text>色々な項目</Text>
              <Text>色々な項目</Text>
              <Text>色々な項目</Text>

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
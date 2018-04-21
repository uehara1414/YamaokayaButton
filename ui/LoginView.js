import React, {Component} from 'react';
import ReactNative from 'react-native';

const { View, TouchableHighlight, Text, Button } = ReactNative;
const secrets =  require('../secrets.json');

class LoginView extends Component {
  render() {
    return (
      <View>
        <Text>Login Please.</Text>
        <Button
          title="Facebook Login"
          onPress={async () => {
            const {
              type,
              token
            } = await Expo.Facebook.logInWithReadPermissionsAsync(
              secrets.FACEBOOK_APP_ID,
              {
                permissions: ['public_profile']
              }
            )

            if (type === 'success') {
              // Build Firebase credential with the Facebook access token.
              const credential = firebase.auth.FacebookAuthProvider.credential(
                token
              )

              // Sign in with credential from the Facebook user.
              firebase
                .auth()
                .signInWithCredential(credential)
                .catch(error => {
                  console.error(error)
                  // Handle Errors here.
                })
            }
          }}
        />
      </View>
    );
  }
}

module.exports = LoginView;
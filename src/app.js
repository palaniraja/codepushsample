/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import codePush from "react-native-code-push";

export default class codepushSample extends Component {


componentDidMount(){
    var updateDialogOptions = {
          updateTitle: "Update",
          optionalUpdateMessage: "New version of the app is available. Install?",
          optionalIgnoreButtonLabel: "Later",
          optionalInstallButtonLabel: "Yes",
        };

    codePush.sync({ updateDialog: updateDialogOptions});
}


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Initial Version (v2.0)
        </Text>
        <Image source={require('./images/g-staff.png')} style={{width: 100, height: 163}} />
        <Image source={require('./images/f-staff.png')} style={{width: 100, height: 163}} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('codepushSample', () => codepushSample);

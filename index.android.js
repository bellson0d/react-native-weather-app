/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import app from './app/index';

export default class RNfuck extends Component {
  render() {
    return (
      <Text>123</Text>
    );
  }
}

AppRegistry.registerComponent('RNfuck', () => app.start());

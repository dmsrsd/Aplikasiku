import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 3000);
  }
  render() {
    return (
      <View>
        <Text> SplashScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

import React, {Component} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
        }}>
        <LottieView
          source={require('../../assets/lottie/12446-share-on-whatsapp.json')}
          autoPlay
          loop={false}
          speed={1}
          onAnimationFinish={() => {
            console.log('Animation Finished!');
            this.props.navigation.replace('MainApp');
          }}
        />
      </View>
    );
  }
}

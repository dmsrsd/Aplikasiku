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
          source={require('../../assets/lottie/78259-loading.json')}
          autoPlay
          loop={true}
          speed={1}
          onAnimationFinish={() => {
            console.log('Animation Finished!');
          }}
        />
      </View>
    );
  }
}

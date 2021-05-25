import React, {Component} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {WHATSADEAL} from '../../../common/commonNames';
import styles from '../styles/styles';

export default class splashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: require('../../../assets/SplashScreen/splashScreenBackground.jpg'),
      logo: require('../../../assets/SplashScreen/splashlogo.png'),
      isVisible: true,
    };
  }

  async componentDidMount() {
    // You can load api data or any other thing here if you want
    const data = await this.navigateToHome();
    if (data !== null) {
      this.props.navigation.navigate('Home');
    }
  }

  navigateToHome = async () => {
    // Splash screen will remain visible for 2 seconds
    const wait = time => new Promise(resolve => setTimeout(resolve, time));
    return wait(1000).then(() => this.props.navigation.navigate('Home'));
  };

  render() {
    let Splash_Screen = (
      <ImageBackground
        source={this.state.backgroundImage}
        style={styles.splashScreenBackground}>
        <View style={styles.splashScreenLogoView}>
          <Image source={this.state.logo} style={styles.splashScreenLogo} />
          <View style={styles.splashScreenContentView}>
            <Text style={styles.splashScreenContent}>{WHATSADEAL}</Text>
          </View>
        </View>
      </ImageBackground>
    );
    return <View>{this.state.isVisible === true ? Splash_Screen : null}</View>;
  }
}

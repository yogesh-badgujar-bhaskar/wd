import {StyleSheet} from 'react-native';
import {CONTENT_FONT} from '../../../common/CommonColors&Font';

const styles = StyleSheet.create({
  splashScreenBackground: {height: '100%', width: '100%'},
  splashScreenLogoView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  splashScreenLogo: {
    height: '35%',
    width: '45%',
    alignSelf: 'center',
  },
  splashScreenContentView: {marginTop: '3%', alignItems: 'center'},
  splashScreenContent: {
    fontFamily: CONTENT_FONT,
    fontSize: 40,
    letterSpacing: 3,
    color: 'white',
  },
});
export default styles;

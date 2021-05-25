import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../../common/CommonColors&Font';

const styles = StyleSheet.create({
  mainConteiner: {
    height: '80%',
    width: '100%',
    marginTop: '8%',
    // backgroundColor: 'grey',
  },
  flexRow: {flexDirection: 'row'},
  primaryColor: {color: PRIMARY_COLOR},
  loginButtonView: {marginTop: 20},
  buttonFont: {color: 'white'},
  troubleloginProblem: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
  },
});
export default styles;

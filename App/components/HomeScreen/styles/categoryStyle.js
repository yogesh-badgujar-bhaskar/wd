import {StyleSheet} from 'react-native';
import {CONSTANTIAFONT} from '../../../common/CommonColors&Font';

const styles = StyleSheet.create({
  categoryMainView: {backgroundColor: 'white'},
  categoryFlatlist: {marginTop: '2.5%'},
  categoryComponentView: {justifyContent: 'center'},
  categoryImagesView: {height: 70, width: 70, marginLeft: 15},
  categoryContent: {
    alignSelf: 'center',
    marginLeft: 8,
    marginTop: 5,
    fontSize: 18,
    marginTop: 0,
    color: '#474747',
    fontFamily: CONSTANTIAFONT,
  },
});
export default styles;

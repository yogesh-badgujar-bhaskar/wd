import {StyleSheet} from 'react-native';
import {
  CONSTANTIAFONT,
  CONTENT_FONT,
  PRIMARY_COLOR,
} from '../../../common/CommonColors&Font';

const styles = StyleSheet.create({
  headerTitleMainView: {
    flexDirection: 'row',
    marginLeft: '-4%',
  },
  WdContent: {fontFamily: CONTENT_FONT, fontSize: 20, color: PRIMARY_COLOR},
  logoContent: {fontFamily: CONTENT_FONT, fontSize: 20},
  headerRightMainView: {flexDirection: 'row', marginRight: 10},
  hederRightSubView: {marginRight: 5},
  searchIconFontSize: {fontSize: 35},
  userIconFontSize: {fontSize: 26},
  cartImage: {height: 29, width: 29},
  bottomsheetMainView: {
    height: '75%',
    width: '100%',
    alignItems: 'center',
  },
  bottomsheetSubView: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'skyblue',
  },
  gradientStyle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  bottomSheetHeader: {
    height: '100%',
    width: '100%',
  },
  bottomsheetLogoImageView: {
    height: '28%',
    width: '100%',
  },
  bottomsheetLogoImage: {
    height: '66%',
    width: '20%',
    alignSelf: 'center',
    marginTop: 5,
  },
  bottomsheetlogoContent: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
  },
  loginSignupMainView: {alignSelf: 'center'},
  loginSignupSubView: {flexDirection: 'row'},
  bottomLoginContent: {
    fontSize: 18,
    fontFamily: CONSTANTIAFONT,
    color: 'black',
  },
  primaryColor: {color: PRIMARY_COLOR},
  bottomsheetOrContent: {
    fontSize: 18,
    fontFamily: CONSTANTIAFONT,
  },
  bottomsheetSignUpContent: {
    fontSize: 18,
    fontFamily: CONSTANTIAFONT,
    color: 'black',
  },
  bottomsheetLine: {
    backgroundColor: PRIMARY_COLOR,
    width: '12%',
    height: '1%',
    marginLeft: '33%',
    marginTop: '1%',
    borderRadius: 20,
  },
  bottomsheetLine2: {
    backgroundColor: PRIMARY_COLOR,
    width: '15%',
    height: '1%',
    marginLeft: '52%',
    marginTop: '-1.4%',
    borderRadius: 20,
  },
  loginSignUpPArentView: {
    height: '75%',
    width: '100%',
    alignItems: 'center',
    marginTop: '3%',
  },
  loginSignUpSubParentView: {
    height: '90%',
    width: '90%',
    // backgroundColor: 'skyblue',
    alignItems: 'center',
  },
});

export default styles;

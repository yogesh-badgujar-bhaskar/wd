import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {BottomSheet} from 'react-native-btr';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Login from '../../Login/Login';
import SignUp from '../../Signup/components/SignUp';
import styles from '../styles/styles';
import {SEARCH_ICON, USER_ICON} from '../../../common/IconNames';
import {GRADIENT_COLOR} from '../../../common/CommonColors&Font';
import {D, EAL, HATSA, LOGIN, OR, SIGNUP, W} from '../../../common/commonNames';

export class HeaderTitle extends Component {
  render() {
    return (
      <View style={styles.headerTitleMainView}>
        <Text style={styles.WdContent}>{W}</Text>
        <Text style={styles.logoContent}>{HATSA}</Text>
        <Text style={styles.WdContent}>{D}</Text>
        <Text style={styles.logoContent}>{EAL}</Text>
      </View>
    );
  }
}

export class HeaderRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loginShown: true,
      lineAnimation: new Animated.Value(1),
      lineAnimation2: new Animated.Value(0),
    };
    this.common = {
      cartImage: require('../../../assets/shoppingCart.png'),
      logo: require('../../../assets/SplashScreen/splashlogo.png'),
    };
  }

  animateLineonSignUp = () => {
    this.setState({loginShown: false});
    Animated.timing(this.state.lineAnimation, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.lineAnimation2, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  animateLineonLogin = () => {
    this.setState({loginShown: true});
    Animated.timing(this.state.lineAnimation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.lineAnimation2, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const lineAnimation = {scaleX: this.state.lineAnimation};
    const lineAnimation2 = {scaleX: this.state.lineAnimation2};
    return (
      <>
        <View style={styles.headerRightMainView}>
          <View style={styles.hederRightSubView}>
            <TouchableOpacity>
              <Icon name={SEARCH_ICON} style={styles.searchIconFontSize} />
            </TouchableOpacity>
          </View>
          <View style={styles.hederRightSubView}>
            <TouchableOpacity onPress={() => this.setState({visible: true})}>
              <EntypoIcon name={USER_ICON} style={styles.userIconFontSize} />
            </TouchableOpacity>
          </View>
          <View style={styles.hederRightSubView}>
            <TouchableOpacity>
              <Image source={this.common.cartImage} style={styles.cartImage} />
            </TouchableOpacity>
          </View>
        </View>
        {/* When user clicks on User Icon The Bottom sheet Visible here */}
        <BottomSheet
          visible={this.state.visible}
          onBackButtonPress={() => this.setState({visible: false})}
          onBackdropPress={() => this.setState({visible: false})}>
          <View style={styles.bottomsheetMainView}>
            <View style={styles.bottomsheetSubView}>
              <LinearGradient
                colors={GRADIENT_COLOR}
                style={styles.gradientStyle}>
                <SafeAreaView>
                  <View style={styles.bottomSheetHeader}>
                    {/* The logo and content here showns */}
                    <View style={styles.bottomsheetLogoImageView}>
                      <Image
                        source={this.common.logo}
                        style={styles.bottomsheetLogoImage}
                      />
                      <View style={styles.bottomsheetlogoContent}>
                        <Text style={styles.WdContent}>{W}</Text>
                        <Text style={styles.logoContent}>{HATSA}</Text>
                        <Text style={styles.WdContent}>{D}</Text>
                        <Text style={styles.logoContent}>{EAL}</Text>
                      </View>
                    </View>
                    {/* Login and signUp main Design View */}
                    <View style={styles.loginSignupMainView}>
                      <View style={styles.loginSignupSubView}>
                        <TouchableOpacity
                          onPress={() => this.animateLineonLogin()}>
                          <Text
                            style={
                              this.state.loginShown == true
                                ? [
                                    styles.bottomLoginContent,
                                    styles.primaryColor,
                                  ]
                                : [styles.bottomLoginContent]
                            }>
                            {LOGIN}
                          </Text>
                        </TouchableOpacity>
                        <Text style={styles.bottomsheetOrContent}> {OR}</Text>
                        <TouchableOpacity
                          onPress={() => this.animateLineonSignUp()}>
                          <Text
                            style={
                              this.state.loginShown == false
                                ? [
                                    styles.bottomsheetSignUpContent,
                                    styles.primaryColor,
                                  ]
                                : [styles.bottomsheetSignUpContent]
                            }>
                            {' '}
                            {SIGNUP}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    {/*first line*/}
                    <Animated.View
                      style={[
                        styles.bottomsheetLine,
                        lineAnimation,
                      ]}></Animated.View>
                    {/*Second line */}
                    <Animated.View
                      style={[
                        styles.bottomsheetLine2,
                        lineAnimation2,
                      ]}></Animated.View>
                    <View style={styles.loginSignUpPArentView}>
                      <View style={styles.loginSignUpSubParentView}>
                        {this.state.loginShown == true ? <Login /> : <SignUp />}
                      </View>
                    </View>
                  </View>
                </SafeAreaView>
              </LinearGradient>
            </View>
          </View>
        </BottomSheet>
      </>
    );
  }
}

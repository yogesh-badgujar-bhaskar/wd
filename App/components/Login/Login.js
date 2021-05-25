import React, {Component} from 'react';
import {Animated, Text, View} from 'react-native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles/Style';
import {
  BYCONTINUING,
  ENTERPASSWORD_PLACEHOLDER,
  GET_HELP,
  NAMEORMOBILE_PLACEHOLDER,
  PRIVACY_POLICY,
  TERMSOFUSE,
  TROUBLE_LOGIN,
} from '../../common/msgs';
import {EMAIL, LOCK} from '../../common/IconNames';
import {LOGIN_CAPITAL} from '../../common/commonNames';
import {PRIMARY_COLOR} from '../../common/CommonColors&Font';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewAnimation: new Animated.Value(0),
    };
  }

  animatedView = () => {
    Animated.timing(this.state.viewAnimation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  componentDidMount() {
    this.animatedView();
  }

  render() {
    const viewAnimation = {
      scaleY: this.state.viewAnimation,
      scaleX: this.state.viewAnimation,
    };
    return (
      <ScrollView>
        <Animated.View style={[styles.mainConteiner, viewAnimation]}>
          <View>
            <Input
              placeholder={NAMEORMOBILE_PLACEHOLDER}
              leftIcon={
                <IconMaterialIcons name={EMAIL} size={24} color="grey" />
              }
              errorStyle={{color: 'red'}}
              errorMessage=""
            />
          </View>
          <View style={{marginTop: '-5%'}}>
            <Input
              placeholder={ENTERPASSWORD_PLACEHOLDER}
              leftIcon={
                <IconMaterialIcons name={LOCK} size={24} color="grey" />
              }
              errorStyle={{color: 'red'}}
              errorMessage=""
            />
          </View>
          <View style={styles.flexRow}>
            <Text>{BYCONTINUING}</Text>
            <Text style={styles.primaryColor}>{TERMSOFUSE}</Text>
          </View>
          <Text style={styles.primaryColor}> {PRIVACY_POLICY}</Text>
          <View style={styles.loginButtonView}>
            <Button
              title={LOGIN_CAPITAL}
              buttonStyle={{
                backgroundColor: PRIMARY_COLOR,
              }}
              style={styles.buttonFont}
            />
            <View style={styles.troubleloginProblem}>
              <Text>{TROUBLE_LOGIN}</Text>
              <Text style={styles.primaryColor}>{GET_HELP}</Text>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    );
  }
}

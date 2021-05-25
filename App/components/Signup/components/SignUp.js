import React, {Component} from 'react';
import {Animated, Text, View} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-elements';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';

export default class SignUp extends Component {
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
        <Animated.View
          style={[
            {
              height: '95%',
              width: '100%',
              // backgroundColor: 'grey',
            },
            viewAnimation,
          ]}>
          <View style={{marginTop: '-5%'}}>
            <Input
              placeholder="Enter Name*"
              leftIcon={<IconAnt name="user" size={24} color="grey" />}
              errorStyle={{color: 'red'}}
              errorMessage=""
            />
          </View>
          <View style={{marginTop: '-8%'}}>
            <Input
              placeholder="Enter Mobile"
              leftIcon={
                <IconMaterialIcons name="call" size={24} color="grey" />
              }
              errorStyle={{color: 'red'}}
              errorMessage=""
            />
          </View>
          <View style={{marginTop: '-8%'}}>
            <Input
              placeholder="Enter your Email"
              leftIcon={
                <IconMaterialIcons name="email" size={24} color="grey" />
              }
              errorStyle={{color: 'red'}}
              errorMessage=""
            />
          </View>
          <View style={{marginTop: '-8%'}}>
            <Input
              placeholder="Enter Password"
              leftIcon={
                <IconMaterialIcons name="lock-outline" size={24} color="grey" />
              }
              errorStyle={{color: 'red'}}
              errorMessage=""
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text> By Continuing, i agree to the</Text>
            <Text style={{color: '#e82d43'}}>Terms of Use &</Text>
          </View>
          <Text style={{color: '#e82d43'}}> Privacy Policy</Text>
          <View style={{marginTop: 20}}>
            <Button
              title="SIGNUP"
              buttonStyle={{
                backgroundColor: '#e82d43',
              }}
              style={{color: 'white'}}
            />
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text></Text>
              <Text> </Text>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    );
  }
}

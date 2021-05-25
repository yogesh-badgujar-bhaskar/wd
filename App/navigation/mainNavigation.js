import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen/components/HomeScreen';
import splashScreen from '../components/SplashScreen/components/splashScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native';

import DemoScreen from '../components/HomeScreen/components/DemoScreen';
import {HeaderTitle, HeaderRight} from '../components/Header/components/Header';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          style={{height: 40, width: 25, marginLeft: 15}}
          source={require('../assets/menu.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default class mainNavigation extends Component {
  MainStackNavigator = ({navigation}) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTitle: () => <HeaderTitle />,
          headerRight: () => <HeaderRight />,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    );
  };
  render() {
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="SplashScreen"
          options={{drawerLabel: 'SplashScreenOption'}}
          component={splashScreen}
        />
        <Drawer.Screen name="Home" component={this.MainStackNavigator} />
      </Drawer.Navigator>
    );
  }
}

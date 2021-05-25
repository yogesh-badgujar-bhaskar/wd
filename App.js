import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigationContainer from './App/navigation/mainNavigation';
import {StatusBar} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <MainNavigationContainer />
        </NavigationContainer>
        <StatusBar
          backgroundColor="white"
          hidden={false}
          barStyle="dark-content"
        />
      </>
    );
  }
}

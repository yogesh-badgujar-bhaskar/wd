import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const dataList = [
  {key: '1', image: require('../../../assets/productAds/mens.jpg')},
  {key: '2', image: require('../../../assets/productAds/womens.jpg')},
  {key: '3', image: require('../../../assets/productAds/kids.jpg')},
  {key: '4', image: require('../../../assets/productAds/kurtas.jpg')},
];
const numColumn = 2;
const WIDTH = Dimensions.get('window').width;

/*Remember Image height must be 239*370 px */

export default class productAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: null,
      screenHeight: null,
    };
  }

  _onLayout(e) {
    this.setState({
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height,
    });
  }

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.item}>
        <ImageBackground
          source={item.image}
          style={{
            height: '100%',
            width: '100%',
          }}></ImageBackground>
      </View>
    );
  };
  render() {
    const a = (
      <FlatList
        data={dataList}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumn}
      />
    );

    const b = (
      <View
        style={{
          height: this.state.screenHeight,
          width: this.state.screenWidth,
          // backgroundColor: 'red',
          marginTop: 5,
        }}>
        <FlatList
          horizontal
          data={dataList}
          renderItem={({item}) => (
            <View
              style={{
                marginLeft: 5,

                backgroundColor: 'white',
              }}>
              <Image source={item.image} style={{height: '100%'}} />
            </View>
          )}
        />
      </View>
    );
    return (
      <View style={styles.container}>
        <SafeAreaView onLayout={this._onLayout.bind(this)}>
          {this.state.screenHeight > this.state.screenWidth ? a : b}
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 3,
  },
  item: {
    backgroundColor: 'skyblue',
    flex: 1,
    margin: 2,
    marginLeft: 4,
    marginRight: 4,
    height: WIDTH / 1.3,
  },
});

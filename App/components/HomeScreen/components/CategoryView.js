import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/categoryStyle';

export default class CategoryView extends Component {
  render() {
    return (
      <View style={styles.categoryMainView}>
        <FlatList
          style={styles.categoryFlatlist}
          horizontal
          data={DATA}
          renderItem={({item}) => (
            <View style={styles.categoryComponentView}>
              <TouchableOpacity>
                <Image style={styles.categoryImagesView} source={item.image} />
                <Text style={styles.categoryContent}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'mens',
    image: require('../../../assets/categoriesImages/mens.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: "women's",
    image: require('../../../assets/categoriesImages/womens.jpg'),
  },
  {
    id: 'hjs58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Kids',
    image: require('../../../assets/categoriesImages/kids.jpg'),
  },
  {
    id: 'bd7kfjsacbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Beauty',
    image: require('../../../assets/categoriesImages/beauty.jpg'),
  },
  {
    id: '3ac68affdsc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Home',
    image: require('../../../assets/categoriesImages/home.jpg'),
  },
];

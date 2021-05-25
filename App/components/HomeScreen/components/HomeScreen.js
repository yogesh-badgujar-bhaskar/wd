import React from 'react';
import {View, SectionList, SafeAreaView, Text} from 'react-native';
import styles from '../styles/styles';
import CategoryView from './CategoryView';
import OfferSlider from './OfferSlider';
import ProductAds from './productAds';

const ListItem = ({item}) => {
  return <View></View>;
};

export default () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <SectionList
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({section}) => (
            <>
              <CategoryView />
              <OfferSlider />
              <ProductAds />
            </>
          )}
          renderItem={({item, section}) => {
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
      },
    ],
  },
];

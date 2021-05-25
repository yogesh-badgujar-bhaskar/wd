import React, {Component} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatListSlider} from 'react-native-flatlist-slider';

const images = [];

const WIDTH = Dimensions.get('screen').width;

export default class OfferSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../../assets/OfferSlider/Slider1.jpg'),
        require('../../../assets/OfferSlider/Slider2.jpg'),
        require('../../../assets/OfferSlider/Slider3.jpg'),
        require('../../../assets/OfferSlider/Slider4.jpg'),
      ],
      screenWidth: null,
      screenHeight: null,
    };
  }

  _onLayout(e) {
    this.setState({
      screenHeight: Dimensions.get('window').height,
      screenWidth: Dimensions.get('window').width,
    });
  }

  render() {
    const a = (
      <SliderBox
        images={this.state.images}
        onCurrentImagePressed={index => alert(`press on ${index}`)}
        dotColor="white"
        inactiveDotColor="grey"
        dotStyle={{
          width: 10,
        }}
        autoplay
        resizeMethod={'resize'}
        resizeMode={'cover'}
        width={WIDTH}
        circleLoop /* The Circle loop use for continue auto play the slider */
      />
      // <FlatListSlider
      //   data={images}
      //   imageKey={'banner'}
      //   local
      //   height={200}
      //   width={WIDTH}
      //   timer={4000}
      //   indicatorContainerStyle={{position: 'absolute', bottom: 10}}
      //   indicatorActiveColor={'skyblue'}
      //   indicatorInActiveColor={'#ffffff'}
      //   indicatorActiveWidth={30}
      //   animation
      // />
    );

    const b = (
      <FlatListSlider
        data={images}
        imageKey={'banner'}
        local
        height={200}
        width={WIDTH * 2}
        timer={4000}
        indicatorContainerStyle={{position: 'absolute', bottom: 10}}
        indicatorActiveColor={'skyblue'}
        indicatorInActiveColor={'#ffffff'}
        indicatorActiveWidth={30}
        animation
      />
    );
    return (
      <View style={{marginTop: 5, marginBottom: 2}}>
        <SafeAreaView onLayout={this._onLayout.bind(this)}>
          {this.state.screenHeight > this.state.screenWidth ? a : b}
        </SafeAreaView>
      </View>
    );
  }
}

// import React, {Component} from 'react';
// import {Dimensions} from 'react-native';
// import {FlatListSlider} from 'react-native-flatlist-slider';

// const WIDTH = Dimensions.get('screen').width;

// const images = [
//   {
//     banner: require('../../../assets/OfferSlider/Slider1.jpg'),
//   },
//   {
//     banner: require('../../../assets/OfferSlider/Slider1.jpg'),
//   },
// ];

// export default class DemoScreen extends Component {
//   render() {
//     return (
//       <FlatListSlider
//         data={images}
//         imageKey={'banner'}
//         local
//         height={200}
//         width={WIDTH}
//         timer={4000}
//         indicatorContainerStyle={{position: 'absolute', bottom: 10}}
//         indicatorActiveColor={'skyblue'}
//         indicatorInActiveColor={'#ffffff'}
//         indicatorActiveWidth={30}
//         animation
//       />
//     );
//   }
// }

// import React, {Component} from 'react';
// import {Text, View} from 'react-native';
// import Carousel from './slider/Carousel';
// import {dummyData} from './Data/data';

// export default class DemoScreen extends Component {
//   render() {
//     return (
//       <View>
//         <Carousel data={dummyData} />
//       </View>
//     );
//   }
// }

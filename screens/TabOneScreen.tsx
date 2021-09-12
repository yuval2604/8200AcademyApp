import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, Dimensions, RefreshControl } from 'react-native';
import { Header } from 'react-navigation-stack';
import ImageHeaderScrollView from 'react-native-image-header-scroll-view';
import HeaderImageScrollView from 'react-native-image-header-scroll-view';

 

const MIN_HEIGHT = 300;
const MAX_HEIGHT = 200;


class BasicUsage extends React.Component {

  _onRefresh() {
    this.setState({
      refreshing: true,
    });

    setTimeout(() => {
      this.setState({
        refreshing: false,
      });
    }, 2000);
  }

  

  render() {
    return (
      <View style={styles.container}>
        <HeaderImageScrollView
          maxHeight={180}
          minHeight={100}
          fadeOutForeground
          headerImage={require('../assets/images/8200Image.jpeg')}
          overScrollMode="never"
          overlayColor="#fff"
          maxOverlayOpacity={0.9}
          renderForeground={() => (
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}>8200Academy       </Text>
            </View>
          )}
          foregroundParallaxRatio={3}
        >
            <View style={{ height: 1000 }} />
          </HeaderImageScrollView>
         
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: 'white',
    backgroundColor: '#00000066',
  },
  buttonText: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'green',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
});

export default BasicUsage;

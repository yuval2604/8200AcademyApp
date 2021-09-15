import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, Dimensions, RefreshControl } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view-new';


const Elaborate = (props) => {
 let Image_Http_URL ={ uri: props.url,
                        width: 420,
                        height: 340};

    return (
     <ParallaxScrollView
    backgroundColor="white"
    renderBackground={() => (
              <View key="background">
                <Image source={Image_Http_URL}/>
               
              </View>
            )}

      contentBackgroundColor="#c6d7ca"
      parallaxHeaderHeight={300}
      renderForeground={() => (
       <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ marginRight: 10, fontSize: 24, fontWeight: 'bold' }} >{ props.header}</Text>
        </View>
      )}>
      <View style={{ height: window.height }}>
         {props.children}
      </View>
    </ParallaxScrollView>
    );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height:'40%', 
    flex:0.35
  },
  CardContainer: {
    padding:10
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

export default Elaborate;

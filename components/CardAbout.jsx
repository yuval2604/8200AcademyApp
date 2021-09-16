import * as React from 'react';
import {StyleSheet, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import Block from './Block';
import Image from './Image';
import Button from './Button';
import { createStackNavigator, createAppContainer } from 'react-navigation';  


const CardAbout = ({ acion =null, imageurl, header, secondHeader, text, link = null, height=400, imageHeight='35%' }) => {
  return (
   <View style={styles.container}>
     <Block marginTop={20} paddingHorizontal={50} style={styles.BlockContainer} height={height} paddingTop={10}>
      <Block marginBottom={8}>
        <Image
          resizeMode="cover"
          source = {imageurl}
          style={{width: '100%', height: imageHeight? imageHeight : '35%'}}
        />
         <Text p secondary marginTop={16} style={styles.header}>
          {header}
        </Text>
        <Text marginVertical={16} marginTop={10} style={styles.secondaryHeader}>
          {secondHeader}
        </Text>
        <Text p lineHeight={26}>
          {text}
          </Text>
          {!!link &&
             <Pressable style={styles.button} onPress={acion} >
            <Text style={styles.text}>הרחב על { header}</Text>
          </Pressable>
          }
      </Block>
    </Block>
    </View>
  );
}
const onPress = () =>{}

export default CardAbout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4ece6'
  },
  BlockContainer: {
  },
  header: {
    fontSize:24
  },
  secondaryHeader: {
    color: 'black',
    fontSize: 18,
    margin: 5
  },
  PressMeButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginTop:10,
    backgroundColor: '#3A6C0B',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

});

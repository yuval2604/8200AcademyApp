import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, Dimensions, RefreshControl } from 'react-native';
import { Header } from 'react-navigation-stack';
import ImageHeaderScrollView from 'react-native-image-header-scroll-view';
import HeaderImageScrollView from 'react-native-image-header-scroll-view';
import Block from '../components/Block';
import CardAbout from '../components/CardAbout';
import StickyParallaxHeader from 'react-native-sticky-parallax-header'

class Elaborate extends React.Component {  

  render() {
    return (
      <View style={styles.container}>
        <StickyParallaxHeader headerType="DetailsHeader" />
      </View>
    );
  }
}




const cardsDesign = [
  {
    question: 'Can design system contain information about copywriting?',
    cards: [
      { number: 'A', question: 'Yes', value: true, revealed: false, picked: false },
      { number: 'B', question: 'No', value: false, revealed: false, picked: false },
    ],
  },
  {
    question: 'Who is taking care of managing a design system?',
    cards: [
      { number: 'A', question: 'Product Designer', value: true, revealed: false, picked: false },
      { number: 'B', question: 'UI Designer', value: false, revealed: false, picked: false },
      { number: 'C', question: 'None of above', value: false, revealed: false, picked: false },
    ],
  },
  {
    question: 'Are there official standards for Design Systems?',
    cards: [
      { number: 'A', question: 'Yes', value: true, revealed: false, picked: false },
      { number: 'B', question: 'No', value: false, revealed: false, picked: false },
    ],
  },
  {
    question: 'What kind of animal is the dolphin?',
    cards: [
      { number: 'A', question: 'Mammalr', value: true, revealed: false, picked: false },
      { number: 'B', question: 'Reptile', value: false, revealed: false, picked: false },
      { number: 'C', question: 'Fish', value: false, revealed: false, picked: false },
      { number: 'C', question: 'Amphibian', value: false, revealed: false, picked: false },
    ],
  },
];


const Brandon = {
  cardsAmount: 10,
  author: 'Brandon',
  type: 'Product Design',
  label: 'Design System',
  cards: cardsDesign,
  color: 'rgb(78,15,255)',
  labelColor: 'rgb(89,80,249)',
  image: require('../assets/images/8200.jpeg'),
  about: 'Coffee buff. Web enthusiast. Unapologetic student. Gamer. Avid organizer.',
};

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

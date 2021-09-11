import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {Color} from '../constants/Colors';
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';
import Icon from "react-native-vector-icons/FontAwesome";
import theme  from "../constants/theme";
import {createAppContainer} from 'react-navigation';

const MainScreen = createBottomTabNavigator(
    {

        Explore: {
            screen: TabOneScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="search" size={25} color={tintColor} />
                )
            }
        },
        Mytrip: {
            screen: TabTwoScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="calendar" size={25} color={tintColor} />
                )
            }
        },
        Favourite: {
            screen: TabOneScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="bookmark-o" size={25} color={tintColor} />
                )
            }
        },
        Profile: {
            screen: TabTwoScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="user-o" size={25} color={tintColor} />
                )
            }
        },
    },
    {
        initialRouteName: 'Explore',
        tabBarOptions: {
            activeTintColor: theme.COLORS.Secondary
        }
    }
);

//const AppContainer = createAppContainer(bottomTabNavigator);
export default createAppContainer(MainScreen);
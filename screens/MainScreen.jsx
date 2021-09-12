import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';
import Icon from "react-native-vector-icons/FontAwesome";
import theme  from "../constants/theme2";
import {createAppContainer} from 'react-navigation';

const MainScreen = createBottomTabNavigator(
    {

        About: {
            screen: TabOneScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="search" size={25} color={tintColor} />
                )
            }
        },
        Subject: {
            screen: TabTwoScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="sort" size={25} color={tintColor} />
                )
            }
        },
        Inside: {
            screen: TabTwoScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="bookmark-o" size={25} color={tintColor} />
                )
            }
        },
        Profile: {
            screen: TabOneScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="user-o" size={25} color={tintColor} />
                )
            }
        },
    },
    {
        initialRouteName: 'About',
        tabBarOptions: {
            activeTintColor: theme.COLORS.Secondary
        }
    }
);

//const AppContainer = createAppContainer(bottomTabNavigator);
export default createAppContainer(MainScreen);
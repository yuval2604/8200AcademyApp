import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../screens/Home';
import GamaSubject from '../screens/GamaSubject';
import Icon from "react-native-vector-icons/FontAwesome";
import theme  from "../constants/theme2";
import {createAppContainer} from 'react-navigation';
import About from '../screens/About';
import OperationSystems from '../screens/OperationSystem';
const MainScreen = createBottomTabNavigator(
    {

        About: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="search" size={25} color={tintColor} />
                )
            }
        },
        Subject: {
            screen: GamaSubject,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="sort" size={25} color={tintColor} />
                )
            }
        },
        Inside: {
            screen: OperationSystems,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="bookmark-o" size={25} color={tintColor} />
                )
            }
        },
        Academy: {
            screen: About,
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
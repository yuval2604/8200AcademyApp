import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Elaborate from './Elaborate'
const Header = () => <View style={styles.header}><Text>Header title</Text></View>
const Main = () => <View style={styles.component}><Text>Main component</Text></View>
const Data = () => <View style={styles.component}><Text>Data component</Text></View>
const Grafic = () => <View style={styles.component}><Text>Grafic component</Text></View>

const footerConfig = {
    tabBarPosition: 'bottom',
}

const Tabs = createMaterialTopTabNavigator()

const MyFooter = () => (
    <Tabs.Navigator {...footerConfig}>
        <Tabs.Screen name="Main" component={Main} />
        <Tabs.Screen name="Elaborate" component={Data} />
    </Tabs.Navigator>
)

const stackConfig = {
    headerMode: 'none',
}

const Stack = createStackNavigator()

const MyStack = () => (
    <Stack.Navigator {...stackConfig}>
        <Stack.Screen name="Main" component={() => <Main />} />
        {/* <Stack.Screen name="Tabs" component={MyFooter} /> */}
    </Stack.Navigator>
)

export default () => (
    <SafeAreaView style={styles.main}>

        <Header />

        <NavigationContainer>
            <MyStack />
        </NavigationContainer>

    </SafeAreaView>
)

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    header: {
        height: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    component: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
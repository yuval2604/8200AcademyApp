import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack"
import TabOneScreen from '../screens/TabOneScreen';
import MainPage from "../screens/MainScreen";
const MainNavigator = createStackNavigator({

    Main: {
        screen: MainPage,
        navigationOptions: { header: null}
    }

});

export default createAppContainer(MainNavigator);

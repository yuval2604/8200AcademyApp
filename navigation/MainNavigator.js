import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack"
import TabOneScreen from '../screens/TabOneScreen';
import MainPage from "./MainScreen";
import Elaborate from '../screens/Elaborate';
import OperationSystems from '../screens/OperationSystem';
import Hardware from '../screens/Hardware';
const MainNavigator = createStackNavigator({

    Main: {
        screen: MainPage,
        navigationOptions: { header: null}
    },
    OperationSystems: {
        screen: OperationSystems,
        navigationOptions: {header:null}
    },
    Hardware: {
        screen: Hardware,
        navigationOptions: {header:null}
    }

});

export default createAppContainer(MainNavigator);

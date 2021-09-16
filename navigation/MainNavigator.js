import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack"
import Home from '../screens/Home';
import MainPage from "./MainScreen";
import Elaborate from '../screens/Elaborate';
import OperationSystems from '../screens/OperationSystem';
import Hardware from '../screens/Hardware';
import About from '../screens/About';
import GamaExlanation from "../screens/GamaExplanation"
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
    },
    About: {
        screen: About,
        navigationOptions: {header:null}
    }

});

export default createAppContainer(MainNavigator);

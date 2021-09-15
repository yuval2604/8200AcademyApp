import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack"
import TabOneScreen from '../screens/TabOneScreen';
import MainPage from "./MainScreen";
import Elaborate from '../screens/Elaborate';
import OperationSystems from '../screens/OperationSystem';
const MainNavigator = createStackNavigator({

    Main: {
        screen: MainPage,
        navigationOptions: { header: null}
    },
    OperationSystems: {
        screen: OperationSystems,
        navigationOptions: {header:null}
    }

});

export default createAppContainer(MainNavigator);

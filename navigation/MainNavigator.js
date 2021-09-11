import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack"
import TabOneScreen from '../screens/TabOneScreen';
const MainNavigator = createStackNavigator({

    Main: {
        screen: TabOneScreen,
        navigationOptions: { header: null}
    }

});

export default createAppContainer(MainNavigator);

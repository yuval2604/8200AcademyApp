import {createSwitchNavigator} from "react-navigation";
import MainStackNavigations from "./MainNavigator"

const stackNaviConfig = {
    navigationOptions: {
        headerMode: 'none',
        headerStyle: {
            //backgroundColor : SolidColors.appBarColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
}

export default createSwitchNavigator(
    {
        //Main: MainNavigator,
        Main: MainStackNavigations

    },
    stackNaviConfig
);

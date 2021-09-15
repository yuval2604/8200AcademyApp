import {createSwitchNavigator} from "react-navigation";
import MainNavigator from "./MainNavigator"


export default createSwitchNavigator(
    {
        Main: MainNavigator
    },
);

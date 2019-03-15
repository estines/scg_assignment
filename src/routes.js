import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import SplashScreen from "./screens/Splash";
import HomeScreen from "./screens/Home";
import TestScreen from "./screens/Test";
import FoodScreen from "./screens/Food";

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Test: TestScreen,
    Food: FoodScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AppNavigation = createSwitchNavigator(
  {
    Splash: SplashScreen,
    App: AppStack
  },
  {
    initialRouteName: "Splash"
  }
);

export default createAppContainer(AppNavigation);

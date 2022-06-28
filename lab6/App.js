import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import ImageLoad from "./components/ImageLoad";
import MainPage from "./components/MainPage";
import ImageSlider from "./components/ImageSlider";
import LazyLoading from "./components/LazyLoading";
import WebInfo from "./components/WebInfo";
import AsyncStorageFunction from "./components/AsyncStorage";
import SyncData from "./components/SyncData";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="MainPage">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="ImageLoad" component={ImageLoad} />
        <Stack.Screen name="ImageSlider" component={ImageSlider} />
        <Stack.Screen name="LazyLoading" component={LazyLoading} />
        <Stack.Screen name="WebInfo" component={WebInfo} />
        <Stack.Screen name="AsyncStorage" component={AsyncStorageFunction} />
        <Stack.Screen name="SyncData" component={SyncData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
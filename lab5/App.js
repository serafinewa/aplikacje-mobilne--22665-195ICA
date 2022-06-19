import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './components/MainPage';
import ScrollOne from './components/ScrollOne';
import ScrollTwo from './components/ScrollTwo';
import Touchable from './components/Touchable';
import SwipeableApp from './components/Swipeable';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="ScrollOne" component={ScrollOne} />
            <Stack.Screen name="ScrollTwo" component={ScrollTwo} />
            <Stack.Screen name="Touchable" component={Touchable} />
            <Stack.Screen name="SwipeableApp" component={SwipeableApp} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './components/MainPage';
import SortFiltr from './components/SortFiltr';
import LazyLoading from './components/LazyLoading';
import StepProgress from './components/StepProgress';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="SortFiltr" component={SortFiltr} />
          <Stack.Screen name="LazyLoading" component={LazyLoading} />
          <Stack.Screen name="StepProgress" component={StepProgress} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './components/MainPage';
import HookUseState from './components/HookUseState';
import RestParameters from './components/RestParameters';
import SpreadOperator from './components/SpreadOperator';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="HookUseState" component={HookUseState} />
          <Stack.Screen name="RestParameters" component={RestParameters} />
          <Stack.Screen name="SpreadOperator" component={SpreadOperator} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
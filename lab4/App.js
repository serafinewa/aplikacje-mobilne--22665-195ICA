import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './components/MainPage';
import TextInputPage from './components/TextInput';
import Select from './components/Select';
import SwitchPage from './components/SwitchPage';
import DateTime from './components/DateTime';
import Active from './components/Active';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="TextInput" component={TextInputPage} />
            <Stack.Screen name="Select" component={Select} />
            <Stack.Screen name="Switch" component={SwitchPage} />
            <Stack.Screen name="DateTime" component={DateTime} />
            <Stack.Screen name="Active" component={Active} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
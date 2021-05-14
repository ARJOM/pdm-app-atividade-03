import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import App from './App';
import Login from './Login';

const Stack = createStackNavigator();

const Routes = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="App"
            component={App}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Routes;
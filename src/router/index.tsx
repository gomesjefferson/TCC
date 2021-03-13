import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/page1';
import Profile from '../pages/page2';

const Stack = createStackNavigator();

export default function Router()  {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="About" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};
import React from 'react';
import Review from './src/screens/Review';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';

import Icon from 'react-native-vector-icons/Feather';
import {Button} from 'react-native';

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen
          name="Review"
          component={Review}
          options={{
            title: 'Write a review',
            headerShown: false,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

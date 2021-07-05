import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image} from 'react-native';
import {LANDING} from '../constants/RouteNames';
import Landing from '../screens/Landing';
const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#e6e7e8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          textTransform: 'uppercase',
        },
        headerTitle: (
          props, // App Logo
        ) => (
          <Image
            style={{height: 46}}
            source={require('../assets/images/m.png')}
            resizeMode="contain"
          />
        ),
      }}>
      <HomeStack.Screen name={LANDING} component={Landing}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;

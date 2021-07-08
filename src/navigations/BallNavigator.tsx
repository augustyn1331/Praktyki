import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image} from 'react-native';
import {BALL} from '../constants/RouteNames';
import Ball from '../screens/Ball';
const BallNavigator = () => {
  const BallStack = createStackNavigator();
  return (
    <BallStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#e6e7e8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          textTransform: 'uppercase',
        },
        headerTitle: () => (
          <Image
            style={{height: 46}}
            source={require('../assets/images/m.png')}
            resizeMode="contain"
          />
        ),
      }}>
      <BallStack.Screen name={BALL} component={Ball} />
    </BallStack.Navigator>
  );
};

export default BallNavigator;

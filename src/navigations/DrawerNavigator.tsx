import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {BALL_NAVIGATOR, HOME_NAVIGATOR} from '../constants/RouteNames';
import BallNavigator from './BallNavigator';
import HomeNavigator from './HomeNavigator';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={BALL_NAVIGATOR} component={BallNavigator} />
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

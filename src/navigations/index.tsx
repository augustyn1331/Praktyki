import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
 <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;

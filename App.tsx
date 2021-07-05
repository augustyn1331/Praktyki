import * as React from 'react';

import {accelerometer} from 'react-native-sensors';
import {useState} from 'react';
import {Animated, StyleSheet, Text, View, Dimensions} from 'react-native';

interface IState {
  x: number;
  y: number;
}

const App = () => {
  const [state, setState] = useState<IState>({x: 0, y: 0});
  React.useEffect(() => {
    accelerometer.subscribe(({x, y}) => setState({x, y}));
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.border}>
        <Animated.View
          style={[
            styles.ball,
            {
              transform: [
                {translateX: state.x * 20},
                {translateY: state.y * 20},
              ],
            },
          ]}
        />
      </View>

      <Text>{state.x}</Text>
      <Text>{state.y}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get('window').height,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'silver',
    justifyContent: 'center',
  },
  ball: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'black',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  border: {
    backgroundColor: 'white',
    height: '60%',
    width: '100%',
    justifyContent: 'center',
  },
});

// import 'react-native-gesture-handler';
// import React from 'react';
// import AppNavContainer from './src/navigations';

// const App = () => {
//   return <AppNavContainer />;

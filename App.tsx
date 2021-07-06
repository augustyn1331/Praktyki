import * as React from 'react';
import {accelerometer} from 'react-native-sensors';
import {useState} from 'react';
import {Animated, StyleSheet, View, Dimensions} from 'react-native';
interface IState {
  x: number;
  y: number;
}
const App = () => {
  // const pan: any = React.useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  // const [state, setState] = useState<IState>({x: 0, y: 0});
  const [state, setState] = useState(new Animated.ValueXY({x: 0, y: 0}));
  React.useEffect(() => {
    accelerometer.subscribe(({x, y}) => {
      var x: number = Math.round(
        (-1 * (x * Dimensions.get('window').width)) / 20,
      );
      var y: number = Math.round((y * Dimensions.get('window').height) / 20);
      setState(new Animated.ValueXY({x, y}));
    });
  }, []);
  // console.log(state.getTranslateTransform())
  return (
    <View style={styles.wrapper}>
      <View style={styles.border}>
        <Animated.View
          style={[
            styles.ball,
            {
              transform: state.getTranslateTransform(),
            },
          ]}
        />
      </View>

      {/* <Text>{state.x}</Text>
      <Text>{state.y}</Text> */}
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
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
});

// import 'react-native-gesture-handler';
// import React from 'react';
// import AppNavContainer from './src/navigations';

// const App = () => {
//   return <AppNavContainer />;

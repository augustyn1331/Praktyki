import * as React from 'react';
import {accelerometer} from 'react-native-sensors';
import {StyleSheet, View, Dimensions} from 'react-native';
interface IState {
  x: number;
  y: number;
}
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const App = () => {
  const MAX_X = (0.89 * Dimensions.get('window').width) / 2;
  const MAX_Y = (0.87 * Dimensions.get('window').height) / 2;

  const current = useSharedValue<IState>({x: 0, y: 0});
  const prev = useSharedValue<IState>({x: 0, y: 0});

  const derivedTranslations = useDerivedValue(() => {
    'worklet';
    let newX = prev.value.x + current.value.x * -2;
    let newY = prev.value.y + current.value.y * 2;

    if (Math.abs(newX) >= MAX_X) {
      newX = prev.value.x;
    }
    if (Math.abs(newY) >= MAX_Y) {
      newY = prev.value.y;
    }
    prev.value = {
      x: newX,
      y: newY,
    };
    return {
      x: newX,
      y: newY,
    };
  }, [current.value]);

  React.useEffect(() => {
    const sub = accelerometer.subscribe(({x, y}) => {
      current.value = {x, y};
    });
    return () => {
      sub.unsubscribe();
    };
  }, [current]);

  const AnimatedStyles = {
    motion: useAnimatedStyle(() => {
      const inputRange = [-100, 0, 100];

      const outputRange = [-100, 0, 100];
      return {
        transform: [
          {
            translateX: withSpring(
              interpolate(derivedTranslations.value.x, inputRange, outputRange),
              {
                damping: 12,
                stiffness: 90,
              },
            ),
          },
          {
            translateY: withSpring(
              interpolate(derivedTranslations.value.y, inputRange, outputRange),
              {
                damping: 12,
                stiffness: 90,
              },
            ),
          },
        ],
      };
    }),
  };

  // console.log(state.getTranslateTransform())
  return (
    <View style={styles.wrapper}>
      <View style={styles.border}>
        <Animated.View style={[styles.ball, AnimatedStyles.motion]} />
      </View>
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

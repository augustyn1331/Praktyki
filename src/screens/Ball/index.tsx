import * as React from 'react';
import {accelerometer} from 'react-native-sensors';
import {StyleSheet, View, Dimensions, Text} from 'react-native';

interface IState {
  x: number;
  y: number;
  shouldupdate?: boolean;
}
import Animated, {
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const CIRCLE_RADIUS = 150;
const BALL_RADIUS = 6;

const App = () => {
  const [state, setState] = React.useState<boolean>(false);
  //SharedValue from current accelerometer value
  const current = useSharedValue<IState>({
    x: 0,
    y: 0,
  });
  //SharedValue from current-1 accelerometer value
  const prev = useSharedValue<IState>({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    current.value.shouldupdate = prev.value.shouldupdate;
  });

  const derivedTranslations = useDerivedValue<IState>(() => {
    'worklet';

    //computing current x and y values of the ball, x is minus 2 to fix the inverted input
    let newX = prev.value.x + current.value.x * -2;
    let newY = prev.value.y + current.value.y * 2;

    let update = false;

    //distance from 0,0 to circle
    const distance = Math.sqrt(newX ** 2 + newY ** 2);

    //checking if the ball is near the boundaries
    if (distance >= CIRCLE_RADIUS - BALL_RADIUS) {
      update = true;
      if (prev.value.shouldupdate === true) {
        newX = prev.value.x;
        newY = prev.value.y;
      } else {
        newX = prev.value.x * 0.98;
        newY = prev.value.y * 0.98;
      }
    }
    //assigning to n-1 shared value
    prev.value = {
      x: newX,
      y: newY,
      shouldupdate: update,
    };
    return {
      x: newX,
      y: newY,
      shouldupdate: update,
    };
  }, [current.value]);

  //getting accelerometer values
  React.useEffect(() => {
    const sub = accelerometer.subscribe(({x, y}) => {
      current.value = {x, y};
      setState(derivedTranslations.value.shouldupdate!);
    });
    return () => {
      sub.unsubscribe();
    };
  }, [
    current,
    prev.value.x,
    prev.value.y,
    derivedTranslations.value.shouldupdate,
  ]);

  const AnimatedStyles = {
    motion: useAnimatedStyle(() => {
      const inputRange = [-100, 0, 100];
      const outputRange = [-100, 0, 100];
      // console.log(derivedTranslations.value.x, derivedTranslations.value.y);
      if (derivedTranslations.value.shouldupdate) {
        cancelAnimation(current);
      }
      return {
        transform: [
          {
            translateX: withSpring(
              interpolate(derivedTranslations.value.x, inputRange, outputRange),
              {
                damping: 99999,
                stiffness: 90,
                restDisplacementThreshold: 0,
                mass: 0.5,
              },
            ),
          },
          {
            translateY: withSpring(
              interpolate(derivedTranslations.value.y, inputRange, outputRange),
              {
                damping: 99999,
                stiffness: 90,
                restDisplacementThreshold: 0,
                mass: 0.5,
              },
            ),
          },
        ],
      };
    }),
  };

  return (
    <View style={styles.wrapper}>
      <Animated.View style={styles.border}>
        <Animated.View style={[styles.ball, AnimatedStyles.motion]} />
      </Animated.View>
      <Text>Czy dotyka? {state.toString()}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get('window').height,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  ball: {
    width: BALL_RADIUS * 2,
    height: BALL_RADIUS * 2,
    borderRadius: BALL_RADIUS,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  border: {
    backgroundColor: 'pink',
    borderWidth: 5,
    borderColor: 'black',
    height: CIRCLE_RADIUS * 2,
    width: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    justifyContent: 'center',
  },
});

// import 'react-native-gesture-handler';
// import React from 'react';
// import AppNavContainer from './src/navigations';

// const App = () => {
//   return <AppNavContainer />;

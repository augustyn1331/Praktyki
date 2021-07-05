import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get('window').height,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'silver',
    justifyContent: 'center',
  },
  logoImage: {
    width: 30,
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

export default styles;

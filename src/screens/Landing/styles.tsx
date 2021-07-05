import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get('window').height,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fefefe',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    paddingTop: 80,
    color: '#202020',
  },
  secondTitle: {
    fontSize: 36,
    textAlign: 'center',
    color: '#175daf',
    fontWeight: '700',
  },
  logoImage: {
    position: 'absolute',
    width: '50%',
    alignSelf: 'center',
    resizeMode: 'contain',
    bottom: 120,
  },
});

export default styles;

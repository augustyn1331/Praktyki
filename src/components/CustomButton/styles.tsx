import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    borderRadius: 3,
    marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf:"center"
  },
  text: {
    paddingVertical:13,
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing:0.5
  },
  loader: {
    paddingHorizontal: 5,
  },
  loaderSection: {
    flexDirection: 'row',
  },
});

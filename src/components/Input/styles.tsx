import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 4,
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  label: {
    alignSelf: 'center',
    width: '80%',
  },

  inputContainer: {
    paddingVertical: 12,
  },

  textInput: {
    flex: 1,
    width: '100%',
    color: 'black',
  },

  error: {
    alignSelf: 'center',
    width: '80%',
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});

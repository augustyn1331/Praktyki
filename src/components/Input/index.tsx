import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TextInputProps} from 'react-native';
import colors from '../../assets/theme/colors';

interface MyInputProps extends TextInputProps {
  iconPosition?: string;
  icon?: any;
  label: string;
  error?: any;
}

const Input = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
  ...props
}: MyInputProps) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition === 'left') {
      return 'row';
    }
    return 'row-reverse';
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (focused) {
      return '#2BAE66FF';
    }
    return colors.grey;
  };

  const handleFocus = () => setFocused(currState => !currState);
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {
            borderColor: getBorderColor(),
            flexDirection: getFlexDirection(),
          },
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={handleFocus}
          onBlur={handleFocus}
          //pasword font glitch fix
          ref={ref =>
            ref && ref.setNativeProps({style: {fontFamily: 'Roboto'}})
          }
          {...props}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default Input;

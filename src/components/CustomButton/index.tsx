import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';

interface MyButtonProps extends TouchableOpacityProps{
  disabled?: boolean;
  label: string;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  width?: 'small' | 'medium';
}

const CustomButton = ({disabled, loading, label, variant, width, onPress, ...props}: MyButtonProps) => {
  const getBackgroundColor = () => {
    if (disabled) return colors.grey;
    if (variant === 'primary') return colors.primary;
    if (variant === 'secondary') return colors.secondary;
    if (variant === 'danger') return colors.danger;
  };
  const getColor = () => {
    if (disabled) return 'black';
    if (variant === 'primary') return colors.secondary;
    if (variant === 'secondary') return colors.primary;
    if (variant === 'danger') return 'black';
  };
  const getWidth = () => {
    if (width === 'small') return '45%';
    if (width === 'medium') return '60%';
    return "100%";
  };
  const getLoadingPadding = () => {
    return loading ? 5 : 0;
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBackgroundColor()},{width: getWidth()},]}>
      <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator color={getColor()} style={styles.loader}/>}
        {label && (
          <Text
            style={[
              styles.text,
              {color: getColor()},
              {paddingHorizontal: getLoadingPadding()},
            ]}>
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';

interface IProps {
  style?: any;
  children?: React.ReactNode;
}

const Container = ({style, children}: IProps) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};

export default Container;

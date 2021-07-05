import * as React from 'react';
import {Image, Text, View} from 'react-native';
import Container from '../../components/Container';
import styles from './styles';

interface IProps {}

const Cmp = (props: IProps) => {
  return (
    <Container style={styles.wrapper}>
      <Text style={styles.title}>Hello <Text style={styles.secondTitle}>Praktyki!</Text></Text>
      <Image
        source={require('../../assets/images/mdevelopers.png')}
        style={styles.logoImage}
      />
    </Container>
  );
};

export default Cmp;

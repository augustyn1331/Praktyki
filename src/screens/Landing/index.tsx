import * as React from 'react';
import {Image, Text} from 'react-native';
import Container from '../../components/Container';
import styles from './styles';

const Cmp = () => {
  return (
    <Container style={styles.wrapper}>
      <Text style={styles.title}>
        Hello <Text style={styles.secondTitle}>Praktyki!</Text>
      </Text>
      <Image
        source={require('../../assets/images/mdevelopers.png')}
        style={styles.logoImage}
      />
    </Container>
  );
};

export default Cmp;

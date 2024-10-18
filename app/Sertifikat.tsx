import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Beranda = () => {
  return (
    <View style={styles.container}>
      <Text>Beranda Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Beranda;

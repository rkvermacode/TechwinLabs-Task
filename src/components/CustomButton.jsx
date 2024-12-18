import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>Post Review Button</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#979797',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    color: 'white',
    padding: 10,
    fontSize: 19,
    fontWeight: '900',
  },
});

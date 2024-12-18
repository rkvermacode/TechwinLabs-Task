import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CustomTextInput = ({placeholder, isMultiline}) => {
  return (
    <View style={[styles.container, isMultiline && {minHeight: 100}]}>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#929292',
    paddingHorizontal: 5,
    borderRadius: 30,
  },
});

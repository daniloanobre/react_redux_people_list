
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({onChangeText, value}) => (
  <View>
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
  />
  </View>
);

const styles = StyleSheet.create({
  input: {
    paddingLeft: 15,
    paddingBottom: 15
  }
});

export default Input;
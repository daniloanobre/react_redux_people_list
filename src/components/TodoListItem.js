import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const TodoListItem = ({ todo, onPressTodo }) => (
  <TouchableOpacity onPress={onPressTodo}>
    <View style={styles.line}>
      <Text style={[
        styles.lineText, 
        todo.done? styles.LineThrough: null
      ]}>
        { todo.text }
    </Text>
  </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15
  },
  LineThrough: {
    textDecorationLine: 'line-through'
  }
});

export default TodoListItem;

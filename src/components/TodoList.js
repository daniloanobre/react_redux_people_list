import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import TodoListItem from './TodoListItem';

import { connect } from 'react-redux';

const TodoList =  ({todos = []}) => (
  <View>
    {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
  </View>
);

const mapStateToProps = state => {
  const {todos} = state;
  return { todos };
}

export default connect(mapStateToProps, null)(TodoList);
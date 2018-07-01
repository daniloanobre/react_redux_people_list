import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo } from '../actions';

const TodoList = ({todos, dispatchToggleTodo}) => (
  <View>
    {todos.map(todo => (
      <TodoListItem 
        key={todo.id} 
        todo={todo} 
        onPressTodo={() => dispatchToggleTodo(todo.id)}
      />
    ))}
  </View>
);

const mapStateToProps = state => {
  const {todos} = state;
  return { todos };
};

const mapDispatchToProps = { 
  dispatchToggleTodo: toggleTodo 
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
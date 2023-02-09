import React from 'react';
import TodoItem from './ToDoItem';
/* eslint-disable react/prop-types */
class TodoList extends React.PureComponent {
  render() {
    const { todos } = this.props;
    return (
      <>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </>
    );
  }
}
export default TodoList;

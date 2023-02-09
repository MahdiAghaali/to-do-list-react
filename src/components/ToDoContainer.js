import React from 'react';
import TodoList from './ToDoList';
import NavBar from './NavBar';
import InputTodo from './InputToDo';
import Header from './Header';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <NavBar />
        <Header />
        <InputTodo />
        <TodoList todos={todos} />
      </div>
    );
  }
}
export default TodoContainer;

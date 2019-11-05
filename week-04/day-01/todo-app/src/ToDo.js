import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          text: 'Feed the monkey',
          prio: 2
        },
        {
          text: 'Buy milk',
          prio: 1
        }
      ],
      doneTodo: [
        {
          text: 'Sleep 8 hours',
          prio: 2
        },
        {
          text: 'Mentoring others',
          prio: 1
        }
      ],
    }
  }
  sortLists = () => {
    const lists = { ...this.state };
    lists.todo.sort((a, b) => a.prio < b.prio);
    lists.doneTodo.sort((a, b) => a.prio < b.prio);
    this.setState(lists);
  }

  doneTodo = () => {

  }

  deleteTodo = () => {

  }


  render() {
    const todoListItems = this.state.todo.map((x) => <li>x.text</li>);
    const doneTodoListItems = this.state.doneTodo.map((x) => <li>x.text</li>);
    return (
      <>
        <h1 onLoad={sortLists}>TODOS</h1>
        <ul>{todoListItems}</ul>
        <h1>DONE TODOS</h1>
        <ul>{doneTodoListItems}</ul>
      </>
    );
  }
}

export default Todo;
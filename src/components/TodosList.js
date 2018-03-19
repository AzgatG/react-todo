import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';

import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import {generateId} from '../helpers'


let todos = [{
    id: 1,
    title: 'Добавить редакс',
    description: '',
    closed: true,
  }, {
    id: 2,
    title: 'Добавить локалсторадж',
    description: '',
    closed: false,
  }, {
    id: 3,
    title: 'Добавить иммутабле дж',
    description: '',
    closed: false,
  }, {
    id: 4,
    title: 'Добавить анимацию',
    description: '',
    closed: false,
  }, {
    id: 5,
    title: 'Добавить адаптивную верстку',
    description: '',
    closed: false,
  }, {
    id: 6,
    title: 'Добавить API',
    description: '',
    closed: false,
  },
]

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class TodosList extends React.Component {
  state = {todos}

  handleChange = (id) => {
    const {todos} = this.state;

    let targetTodo = todos.find( todo => todo.id === id )
    targetTodo.closed = !targetTodo.closed;
    this.setState({todos})
  }

  handleAddTodo = (todo) => {
    let {todos} = this.state;
    this.setState({
      todos: [...todos, {title: todo, description: '', closed: false, id: generateId()}]
    })
  }

  handleDeleteTodo = id => {
    console.log(id)
    let {todos} = this.state;
    console.log(todos.filter( todo => todo.id !== id))
    this.setState({
      todos: todos.filter( todo => todo.id !== id)
    }) 
  }

  render() {
    const {classes} = this.props;
    const {todos} = this.state;

    return (
      <div> 
        <TodoForm onSubmit={this.handleAddTodo}/>
        <List>
          {todos.map(todo => (
            <TodoItem
              change={this.handleChange}
              delete={this.handleDeleteTodo}
              key={todo.id}
              todo={todo}
            />)
          )}
        </List>
      </div>
    );
  }
}


export default withStyles(styles)(TodosList);
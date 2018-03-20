import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';

import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import Counter from './Counter'
import Footer from './Footer';
import {generateId} from '../helpers'


let todos = [{
    id: 1,
    title: 'Добавить редакс',
    description: '',
    closed: true,
    editingMode: false,
  }, {
    id: 2,
    title: 'Добавить локалсторадж',
    description: '',
    closed: false,
    editingMode: false,
  }, {
    id: 3,
    title: 'Добавить иммутабле дж',
    description: '',
    closed: false,
    editingMode: false,
  }, {
    id: 4,
    title: 'Добавить анимацию',
    description: '',
    closed: false,
    editingMode: false,
  }, {
    id: 5,
    title: 'Добавить адаптивную верстку',
    description: '',
    closed: false,
    editingMode: false,
  }, {
    id: 6,
    title: 'Добавить API',
    description: '',
    closed: false,
    editingMode: false,
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
  state = {
    todos,
    filter: 'ALL'
  }

  handleChange = (id, name) => {
    const {todos} = this.state;

    let targetTodo = todos.find( todo => todo.id === id )
    targetTodo[`${name}`] = !targetTodo[`${name}`];
    this.setState({todos})
  }

  handleAddTodo = (todo) => {
    let {todos} = this.state;
    this.setState({
      todos: [...todos, {title: todo, description: '', closed: false, id: generateId()}]
    })
  }

  handleDeleteTodo = id => {
    let {todos} = this.state;
    this.setState({
      todos: todos.filter( todo => todo.id !== id)
    }) 
  }

  handleEdit = todo => {
    const {todos} = this.state;

    let targetTodo = todos.find( item => item.id === todo.id )

    targetTodo.editingMode = !todo.editingMode;
    targetTodo.title = todo.title;

    this.setState({todos})
  }

  hadleChangeFilter = filter => {
    this.setState({ filter });
  }

  render() {
    const {classes} = this.props;
    let {todos, filter} = this.state;
    const count = todos.filter( todo => !todo.closed)

    switch (filter) {
      case 'CLOSED':
        todos = todos.filter( todo => todo.closed );
        break;
      case 'ACTIVE':
        todos = todos.filter( todo => !todo.closed );
        break;
    }

    return (
      <div> 
        <TodoForm onSubmit={this.handleAddTodo}/>
        <List>
          {todos.map(todo => (
            <TodoItem
              edit={this.handleEdit}
              change={this.handleChange}
              delete={this.handleDeleteTodo}
              key={todo.id}
              todo={todo}
            />)
          )}
        </List>
        <Counter count={count.length} />
        <Footer change={this.hadleChangeFilter} value={filter} />
      </div>
    );
  }
}


export default withStyles(styles)(TodosList);
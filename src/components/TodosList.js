import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';

import TodoItem from './TodoItem'

let todos = [{
    id: 1,
    title: 'Подучить реакт',
    description: '',
    closed: false,
  },{
    id: 2,
    title: 'Подучить реакт 1',
    description: '',
    closed: true,
  },{
    id: 3,
    title: 'Подучить реакт 2',
    description: '',
    closed: false,
  },{
    id: 4,
    title: 'Подучить реакт 3',
    description: '',
    closed: false,
  },{
    id: 5,
    title: 'Подучить реакт 4',
    description: '',
    closed: true,
  },{
    id: 6,
    title: 'Подучить реакт 5',
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
    let {todos} = this.state;

    let targetTodo = todos.find( todo => todo.id === id )
    targetTodo.closed = !targetTodo.closed;
    this.setState({todos})
  }

  render() {
    const {classes} = this.props;
    const {todos} = this.state;

    return (
      <List>
        {todos.map(todo => (
          <TodoItem
            change={this.handleChange}
            key={todo.id}
            todo={todo}
          />)
        )}
      </List>
    );
  }
}


export default withStyles(styles)(TodosList);
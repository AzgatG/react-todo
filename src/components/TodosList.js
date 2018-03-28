import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import List from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';

import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import Counter from './Counter'
import Footer from './Footer';
import {generateId} from '../helpers'
import {SHOW_COMPLETED, SHOW_ACTIVE} from '../constants'

class TodosList extends React.Component {
  render() {
    let {todos} = this.props;
    const {filter} = this.props;
    const count = todos.reduce((sum, todo) => !todo.completed ? sum += 1 : sum, 0);

    switch (filter) {
      case 'SHOW_COMPLETED':
        todos = todos.filter( todo => todo.completed );
        break;
      case 'SHOW_ACTIVE':
        todos = todos.filter( todo => !todo.completed );
        break;
    }

    return (
      <div> 
        <TodoForm />
        <List>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />)
          )}
        </List>
        <Counter count={count} />
        <Footer value={filter} />
      </div>
    );
  }
}


export default connect(({todos, filter}) => ({
  todos,
  filter,
}))(TodosList);
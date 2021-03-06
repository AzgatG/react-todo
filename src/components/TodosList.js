import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import List from 'material-ui/List';
import { CSSTransitionGroup } from 'react-transition-group';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Counter from './Counter';
import Footer from './Footer';


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
          <CSSTransitionGroup
            transitionName={{
              enter: 'animated',
              enterActive: 'zoomIn',
              leave: 'animated',
              leaveActive: 'zoomOut',
              appear: 'animated',
              appearActive: 'zoomIn'
            }}
            transitionEnterTimeout={700}
            transitionLeaveTimeout={500}
            transitionAppear={true}
            transitionAppearTimeout={700}
          >
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
              />)
            )}
          </CSSTransitionGroup>
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
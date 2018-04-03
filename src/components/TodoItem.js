import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {withStyles} from 'material-ui/styles';
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui-icons/Close';
import Tooltip from 'material-ui/Tooltip';

import TodoForm from './TodoForm';
import {toggleTodo, deleteTodo, editTodo} from '../AC';


const styles = theme => ({
  editForm: {
    paddingLeft: '20px',
  },
  completed: {
    textDecoration: 'line-through',
    opacity: '0.5',
  }
});

class TodoItem extends React.Component {
  changeCheckBox = (id, name) => ev => {
    const {toggleTodo, todo} = this.props;
    toggleTodo(todo.id, name);
  }

  deleteItem = id => ev => {
    this.props.deleteTodo(id);
  }

  render() {
    const {classes, todo} = this.props;

    return (
      <div> 
        {todo.editingMode && 
          <div className={classes.editForm}>
            <TodoForm todo={todo} />
          </div>
        }
        {!todo.editingMode &&
          <Tooltip title="Duble click for edit" placement="bottom">
            <ListItem
              role={undefined}
              dense
              button
              className={classes.listItem}
              onDoubleClick={this.changeCheckBox(todo.id, 'editingMode')}
            > 
              <Checkbox
                checked={todo.completed}
                onChange={this.changeCheckBox(todo.id, 'completed')}
                tabIndex={-1}
                disableRipple
              />
                <ListItemText
                  className={todo.completed ? classes.completed : ''}
                  primary={todo.title}
                />
              <ListItemSecondaryAction>
                <IconButton aria-label="Deleteitem">
                  <Delete onClick={this.deleteItem(todo.id)} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Tooltip>
        }
      </div>
    );
  }
}

export default connect(
  null,
  {toggleTodo, deleteTodo}
)(withStyles(styles)(TodoItem));
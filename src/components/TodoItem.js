import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui-icons/Close';
import Tooltip from 'material-ui/Tooltip';

import TodoForm from './TodoForm'


const styles = theme => ({
  editForm: {
    paddingLeft: '20px',
  },
  closed: {
    textDecoration: 'line-through',
    opacity: '0.5',
  }
});

class TodoItem extends React.Component {
  changeCheckBox = (id, name) => ev => {
    this.props.change(id, name);
  }

  deleteItem = id => ev => {
    this.props.delete(id)
  }

  handleSubmit = title => {
    let {todo} = this.props;
    todo.title = title;
    this.props.edit(todo);
  }

  render() {
    const { classes, change, todo } = this.props;
    const { id, title, closed, description, editingMode } = todo;

    return (
      <div> 
        {editingMode && 
          <div className={classes.editForm}>
            <TodoForm
              onSubmit={this.handleSubmit}
              todo={todo}
            />
          </div>
        }
        {!editingMode &&
          <ListItem
            key={name}
            role={undefined}
            dense
            button
            className={classes.listItem}
          > 
            <Checkbox
              checked={closed}
              onChange={this.changeCheckBox(id, 'closed')}
              tabIndex={-1}
              disableRipple
            />
            <Tooltip title="Duble click for edit" placement="bottom">
              <ListItemText
                onDoubleClick={this.changeCheckBox(id, 'editingMode')}
                className={closed ? classes.closed : ''} primary={title}
              />
            </Tooltip>
            <ListItemSecondaryAction>
              <IconButton aria-label="Deleteitem">
                <Delete onClick={this.deleteItem(id)} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        }
      </div>
    );
  }
}

export default withStyles(styles)(TodoItem);
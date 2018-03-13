import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  closed: {
    textDecoration: 'line-through',
    opacity: '0.5',
  }
});

class TodoItem extends React.Component {
  changeCheckBox = (value) => ev => {
    this.props.change(value);
  }

  render() {
    const { classes, change, todo } = this.props;
    const { id, title, closed, description } = todo;

    return (
      <ListItem
        key={name}
        role={undefined}
        dense
        button
        className={classes.listItem}
      >
        <Checkbox
          checked={closed}
          onChange={this.changeCheckBox(id)}
          tabIndex={-1}
          disableRipple
        />
        <ListItemText onClick={this.changeCheckBox(id)} className={closed ? classes.closed : ''} primary={title} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Comments">
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default withStyles(styles)(TodoItem);
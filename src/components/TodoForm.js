import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import {withStyles} from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import AddButton from 'material-ui-icons/Add';

import {addTodo, editTodo} from '../AC'


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
  	flex: '1 1',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    const {todo} = props;

    this.state = {
      todo: todo ? todo.title : '',
    };
  }

  handleChange = event => {
    this.setState({
      todo: event.target.value,
    });
  };

  handleSubmit = event => {
  	event.preventDefault();

    const {todo, addTodo, editTodo} =this.props;

    if (todo) {
      editTodo({...todo, title: this.state.todo});
    } else {
      addTodo(this.state.todo);
    }

    this.setState({
      todo: '',
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <TextField
          id="name"
          className={classes.textField}
          value={this.state.todo}
          onChange={this.handleChange}
          margin="normal"
          helperText="Press enter"
          required={true}
        />
      </form>
    );
  }
}

TodoForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  null,
  {addTodo, editTodo}
)(withStyles(styles)(TodoForm));
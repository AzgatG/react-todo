import React from 'react';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import Title from './Title';
import TodosList from './TodosList';


const styles = (theme) => ({
  root: {
    maxWidth: '1000px',
    margin: '0 auto'
  }
});

function App({ classes }) {
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Title />
        <TodosList />
      </Paper>
    </div>
  );
}

export default withStyles(styles)(App);

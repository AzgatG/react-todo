import React, { Component } from 'react';
import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import Title from './Title'
import TodosList from './TodosList'
import Footer from './Footer'

const styles = theme => ({
  root: {
    maxWidth: '1000px',
    margin: '0 auto'
  }
});

function App(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Title />
        <TodosList />
        <Footer />
      </Paper>
    </div>
  );
}

export default withStyles(styles)(App);

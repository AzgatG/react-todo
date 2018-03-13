import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

import Counter from './Counter'


const styles = theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing.unit * 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  formControl: {
    
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: 'row',
  },
});

class Footer extends React.Component {
  state = {
    value: 'ALL',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Counter count={6} />
        <FormControl component="fieldset" required className={classes.formControl}>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          > 
            <FormControlLabel value="ALL" control={<Radio />} label="Все" />
            <FormControlLabel value="ACTIVE" control={<Radio />} label="Активные" />
            <FormControlLabel value="CLOSE" control={<Radio />} label="Выполненые" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
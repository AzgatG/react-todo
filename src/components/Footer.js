import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

import {changeFilter} from '../AC';
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants'


const styles = theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing.unit * 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formControl: {
    
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: 'row',
  },
});

class Footer extends React.Component {
  handleChange = (event, value) => {
    this.props.changeFilter(value);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className={classes.group}
            value={this.props.value}
            onChange={this.handleChange}
          > 
            <FormControlLabel value="SHOW_ALL" control={<Radio />} label="Все" />
            <FormControlLabel value="SHOW_ACTIVE" control={<Radio />} label="Активные" />
            <FormControlLabel value="SHOW_COMPLETED" control={<Radio />} label="Выполненые" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default connect(
  null,
  {changeFilter}
)(withStyles(styles)(Footer));
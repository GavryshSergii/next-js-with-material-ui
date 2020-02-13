import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { grey } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root:{
    paddingBottom: theme.spacing(9),
  },
  flex: {
    flexGrow: 1,
    border: '4px double black',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  gridContainer: {
    backgroundColor: 'grey',
    height: 500,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  h2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
}));

const InteractivityGrid = () => {
  const classes = useStyles();
  let [direction, setDirection] = React.useState('row');
  let [justify, setJustify] = React.useState('flex-start');
  let [alignItems, setAlignItems] = React.useState('stretch');

  const handleChangeDirection = event => {
    setDirection(event.target.value);
  };
  const handleChangeJustify = event => {
    setJustify(event.target.value);
  };
  const handleChangeAlignItems = event => {
    setAlignItems(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <Grid
          className={classes.gridContainer}
          container
          spacing={1}
          direction={direction}
          justify={justify}
          alignItems='stretch'
        >
          <Grid item>
            <Paper className={classes.paper} style={{ 'height': 65 }}>
              <h2 className={classes.h2}>First</h2>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} style={{ 'height': 75 }}>
              <h2 className={classes.h2}>Second</h2>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} style={{ 'height': 95 }}>
              <h2 className={classes.h2}>Third</h2>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} style={{ 'height': 85 }}>
              <h2 className={classes.h2}>Fourth</h2>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} style={{ 'height': 75 }}>
              <h2 className={classes.h2}>Fifth</h2>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Direction</FormLabel>
          <RadioGroup name="direction" value={direction} onChange={handleChangeDirection} row>
            <FormControlLabel value="row" control={<Radio />} label="row" />
            <FormControlLabel value="row-reverse" control={<Radio />} label="row-reverse" />
            <FormControlLabel value="column" control={<Radio />} label="column" />
            <FormControlLabel value="column-reverse" control={<Radio />} label="column-reverse" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Justify</FormLabel>
          <RadioGroup name="justify" value={justify} onChange={handleChangeJustify} row>
            <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
            <FormControlLabel value="center" control={<Radio />} label="center" />
            <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
            <FormControlLabel value="space-between" control={<Radio />} label="space-between" />
            <FormControlLabel value="space-around" control={<Radio />} label="space-around" />
            <FormControlLabel value="space-evenly" control={<Radio />} label="space-evenly" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">AlignItems</FormLabel>
          <RadioGroup name="alignItems" value={alignItems} onChange={handleChangeAlignItems} row>
            <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
            <FormControlLabel value="center" control={<Radio />} label="center" />
            <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
            <FormControlLabel value="stretch" control={<Radio />} label="stretch" />
            <FormControlLabel value="baseline" control={<Radio />} label="baseline" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default InteractivityGrid;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [gender, setGender] = React.useState('female');

  const handleChange = event => {
    setGender(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleChange} row>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>


      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Direction</FormLabel>
          <RadioGroup name="direction" value={gender} onChange={handleChange} row>
            <FormControlLabel value="row" control={ <Radio/> } label="row"/>
            <FormControlLabel value="row-reverse" control={ <Radio /> } label="row-reverse"/>
            <FormControlLabel value="column" control={ <Radio /> } label="column"/>
            <FormControlLabel value="column-reverse" control={ <Radio /> } label="column-reverse"/>
          </RadioGroup>
        </FormControl>
      </div>


    </div>
  );
}





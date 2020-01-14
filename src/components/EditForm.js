import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(theme => ({
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "70%",
    padding: theme.spacing(2),
    margin: "0 auto"
  },
  button: {
    marginTop: theme.spacing(1)
  },
  buttonMarginR: {
    marginRight: theme.spacing(1)
  }
}));



const UserForm = ({ updateUser, currentUser, setIsEdited }) => {
  const classes = useStyles();

  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser])

  const onInputValueChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value})
  }

  const onFormSubmit = e => {
    e.preventDefault();
    updateUser(user.id, user)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Typography gutterBottom paragraph color="secondary" variant="h4">
        Edit User
      </Typography>
      <Paper elevation={3}>
        <div className={classes.inputWrapper}>
          <TextField onChange={onInputValueChange} value={user.firstName} name="firstName" margin="dense" label="First name" variant="outlined" />
          <TextField onChange={onInputValueChange} value={user.lastName} name="lastName" margin="dense" label="Last name" variant="outlined" />
          <div>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={`${classes.button} ${classes.buttonMarginR}`}
              startIcon={<EditIcon />}
            >Edit</Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<CancelIcon />}
              onClick={() => setIsEdited(false)}
            >Cancel</Button>
          </div>
        </div>
      </Paper>
    </form>
  );
};

export default UserForm;

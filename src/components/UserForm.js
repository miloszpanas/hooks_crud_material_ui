import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

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
  }
}));

const TodoForm = ({ addNewUser }) => {
  const classes = useStyles();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    id: "" + Math.random()
  });

  const onInputValueChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value})
  }

  const onFormSubmit = e => {
    e.preventDefault();
    if (!user.firstName || !user.lastName) return;
    addNewUser(user);

    setUser({
      firstName: "",
      lastName: "",
      id: "" + Math.random()
    })
  }

  const { firstName, lastName } = user;


  return (
    <form onSubmit={onFormSubmit}>
      <Typography gutterBottom paragraph color="secondary" variant="h4">
        Add new user
      </Typography>
      <Paper elevation={3}>
        <div className={classes.inputWrapper}>
          <TextField onChange={onInputValueChange} value={firstName} name="firstName" margin="dense" label="First name" variant="outlined" />
          <TextField onChange={onInputValueChange} value={lastName} name="lastName" margin="dense" label="Last name" variant="outlined" />
          <div>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddIcon />}
            >Add</Button>
          </div>
        </div>
      </Paper>
    </form>
  );
};

export default TodoForm;

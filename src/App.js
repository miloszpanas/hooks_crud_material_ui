import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import UserForm from "./components/UserForm";
import EditForm from "./components/EditForm";
import UserList from "./components/UserList";

const useStyles = makeStyles(theme => ({
  titleBorderTop: {
    paddingTop: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();

  const initialState = [
    { firstName: "Miłosz", lastName: "Panas", id: "" + Math.random() },
    { firstName: "Majkel", lastName: "Żywiecki", id: "" + Math.random() }
  ];

  const initialFormState = {
    firstName: "",
    userName: "",
    id: null
  };

  const [data, setData] = useState(initialState);
  const [isEdited, setIsEdited] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addNewUser = user => {
    setData([...data, user]);
  };

  const deleteUser = id => {
    setData(data.filter(user => user.id !== id));
  };
  console.log(isEdited);

  const editRow = user => {
    setIsEdited(true);

    setCurrentUser({
      firstName: user.firstName,
      lastName: user.lastName,
      id: user.id
    });
  };

  const updateUser = (id, editedUser) => {
    setIsEdited(false);

    setData(data.map(user => user.id === id ? editedUser: user));
  }

  console.log(currentUser);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography
          color="secondary"
          align="center"
          variant="h2"
          gutterBottom
          className={classes.titleBorderTop}
        >
          Hooks practice
        </Typography>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            {isEdited ? (
              <EditForm
                setIsEdited={setIsEdited}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            ) : (
              <UserForm addNewUser={addNewUser} />
            )}
          </Grid>
          <Grid item sm={6} xs={12}>
            <UserList
              userData={data}
              deleteUser={deleteUser}
              editRow={editRow}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;

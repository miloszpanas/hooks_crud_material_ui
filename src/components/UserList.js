import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const UsersList = ({ userData, deleteUser, editRow }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography
        gutterBottom
        paragraph
        align="center"
        color="secondary"
        variant="h4"
      >
        A list of users
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          {!userData.length && (
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography align="center" variant="h6">
                    No users to show
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
          <TableHead>
            <TableRow>
              <TableCell align="center">Firstname</TableCell>
              <TableCell align="center">Lastname</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {userData.map(user => (
              <TableRow key={user.id}>
                <TableCell align="center">{user.firstName}</TableCell>
                <TableCell align="center">{user.lastName}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<EditIcon />}
                    onClick={() => editRow(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default UsersList;

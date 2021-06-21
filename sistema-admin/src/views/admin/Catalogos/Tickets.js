import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import TableTickets from "components/Tables/TableTickets";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: 'auto',
      maxWidth: '90%',
    },
  }));
const Tickets = () => {

    const classes = useStyles();
    return(
        <Container 
          maxWidth={false}
          component={Box}
          marginTop="-15rem"
          className={classes.root}>
          <Grid className={classes.paper} container spacing={3} >
              <Grid item xs={12} >
              <TableTickets/>
              </Grid>
          </Grid>
        </Container>

    );
}

export default Tickets;
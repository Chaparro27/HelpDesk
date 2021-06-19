import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ListTicket from "components/Lists/ListTickets";
import TableTickets from "components/Tables/TableTickets";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: '90%',
    },
  }));
const Tickets = () => {

    const classes = useStyles();
    return(
        <div className={classes.root}>
        <Grid className={classes.paper} container spacing={3} >
            <Grid item xs={12} >
            <TableTickets/>
            </Grid>
        </Grid>
        </div>

    );
}

export default Tickets;
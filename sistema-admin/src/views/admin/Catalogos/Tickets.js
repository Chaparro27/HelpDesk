import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { 
  IconButton,
} from '@material-ui/core/';

import TableTickets from "components/Tables/TableTickets";
import { useSearch } from "Hooks/useSearch";

import AddCircleIcon from '@material-ui/icons/AddCircle';
import ModalCustom from "components/Modal/ModalCustom";
import ModalTicket from "components/Modal/ModalTicket";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: 'auto',
      maxWidth: '90%',
    },
    addicon: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        color: theme.palette.success.main,
        [theme.breakpoints.up(2800)]:{
            width: theme.spacing(5),
        },
    },
    buttons: {
        // margin: theme.spacing(0.5)
    },
  }));
const Tickets = () => {

  const [ 
    isSearch, 
    search, 
    isCreating,
    whereUpdating,
    handleChange,
    reset, 
    handleSetValues,
    handleModalopen, 
    handleModalClose ] = useSearch();

    const classes = useStyles();
    return(
        <Container 
          maxWidth={false}
          component={Box}
          marginTop="-15rem"
          className={classes.root}>
           
          <Grid className={classes.paper} container spacing={3} >
              <Grid item xs={12}>
                <IconButton
                  edge="start"
                  onClick={ handleModalopen }
                  handleModalClose ={handleModalClose}
                  className={ classes.buttons }
                  color="inherit" >
                    <AddCircleIcon  className={ classes.addicon } />
                </IconButton>
              </Grid>
              <Grid item xs={12} >
                <TableTickets/>
              </Grid>
          </Grid>
          
          <ModalCustom
            handleModalClose={ handleModalClose }
            openModal={ isCreating }
            component={ ModalTicket } />
        </Container>

    );
}

export default Tickets;
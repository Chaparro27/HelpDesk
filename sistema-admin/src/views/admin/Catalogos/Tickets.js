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
            <IconButton
              edge="start"
              onClick={ handleModalopen }
              handleModalClose ={handleModalClose}
              className={ classes.buttons }
              color="inherit" >
                <AddCircleIcon  className={ classes.addicon } />
            </IconButton>
          <Grid className={classes.paper} container spacing={3} >
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
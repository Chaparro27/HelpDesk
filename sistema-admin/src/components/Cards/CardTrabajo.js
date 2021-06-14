import React from "react";
// @material-ui/core components
import { 
    Box, 
    CardActionArea, 
    CardHeader, 
    IconButton, 
    makeStyles,
    Card,
    CardContent,
    Typography
} from '@material-ui/core';

import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles((theme) =>({
    cardContainer:{
        margin: theme.spacing(1.5)
    },
    buttonDelete:{
        position: 'absolute',
        top: -25,
        right:-20,
        [theme.breakpoints.up(2800)]:{
            top: -25,
            right:-25,
        },
    },
    imgDelete: {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
        color: theme.palette.error.main,
        [theme.breakpoints.up(2800)]:{
            width: theme.spacing(5),
        },
    },
    media: {
        height: 200,
        padding: theme.spacing(1),
        objectFit: 'contain',
    },
    name:{
        fontSize:'1rem',
    },
    EstatusInProcess: {
        backgroundColor: theme.palette.warning.light
    },
    EstatusFinalizado:{
        backgroundColor: theme.palette.success.main
    }
}));

const CardTrabajo = ({ item, isDelete }) => {
    const classes = useStyles();

    const handleDelete = ( id ) => (e) => {
        e.preventDefault();
    }
    return(
        <div className={classes.cardContainer}>
            <CardActionArea>
                <Card>
                    {
                        (isDelete)
                            ?   <IconButton size="medium" className={ classes.buttonDelete } onClick={ handleDelete(item.id) }>
                                    <RemoveCircleIcon className={ classes.imgDelete }/>
                                </IconButton> 
                            :   null  
                    }
                    
                    <CardHeader
                        className={ false ? classes.EstatusInProcess : classes.EstatusFinalizado }
                        title={
                            <Box
                                textAlign="center"
                                marginBottom="0rem"
                                marginTop="0rem"
                                fontSize="1.3rem"
                                color="#ffffff"
                            >
                                <Box fontSize="80%" fontWeight="400" component="small">
                                    Ventanas Corredizas L3"
                                </Box>
                            </Box>
                        } 
                        titleTypographyProps={{
                            component: Box,
                            textAlign: "center",
                            marginBottom: "0rem!important",
                            marginTop: "0rem!important",
                            fontSize: "1.3rem!important",
                        }}
                    >
                    </CardHeader>
                    <CardContent>
                        <Typography  className={classes.name}>
                            #Folio: {item}
                        </Typography>
                        <Typography  className={classes.name}>
                            Cliente: Grupo Dags
                        </Typography>
                        <Typography  className={classes.name}>
                            Precio Total: $1500.00
                        </Typography>
                        <Typography  className={classes.name}>
                            Saldo: $1500.00
                        </Typography>
                    </CardContent>
                </Card>  
            </CardActionArea>          
        </div>
    );
}

export default CardTrabajo;
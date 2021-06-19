import React, {useEffect, useState }from 'react';
import { useForm } from "react-hook-form";
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
import { GetClients,DeleteClients } from '../../actions/clientesActions';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';


const useStyles = makeStyles((theme) =>({
    cardContainer:{
        margin: theme.spacing(2.5),
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
}));
const CardClient = ({ item, isDelete }) => {


    const classes = useStyles();
    const handleDelete = (id) => {
        DeleteClients(`clients/remove/${id}`)
    }
    return (
        <div className={classes.cardContainer}>
                                {/* {
           data.map((column, index) => (
           <> */}
            <CardActionArea key={item}>
                <Card>
                    {
                        (isDelete)
                            ?   <IconButton size="medium" className={ classes.buttonDelete} onClick={ e => handleDelete(item.idCliente)}>
                                    <RemoveCircleIcon className={ classes.imgDelete }/>
                                </IconButton> 
                            :   null  
                    }
                    
                    <CardHeader
                        title={
                            <Box
                                textAlign="center"
                                marginBottom="0rem"
                                marginTop="0rem"
                                fontSize="1.3rem"
                            >
                                <Box fontSize="80%" fontWeight="400" component="small">
                                    Información cliente
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
                        {item.nombreClient}
                        </Typography>
                        <Typography  className={classes.name}>
                        {item.telefono}
                        </Typography>
                    </CardContent>
                </Card>  
            </CardActionArea>          
          {/* </> 
          ))
          } */}
        </div>
    );
}

export default CardClient
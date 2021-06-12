import React from 'react';

// @material-ui/core components
import { 
    Box, 
    CardActionArea, 
    CardHeader, 
    IconButton, 
    makeStyles,
    Card,
    CardContent,
    Typography,
    Grid
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
        padding: theme.spacing(1),
        objectFit: 'contain',
    },
    titles:{
        marginBottom: theme.spacing(1)
    },
    title:{
        textAlign:"center",
        color: theme.palette.primary.main,
        fontSize:'0.8rem',
    },
    name: {
        fontSize:'0.8rem',
    },
    cardContent:{
        // height: "40vh",
    }
}));
const CardVenta = ({ item, isDelete }) => {
    const classes = useStyles();

    const handleDelete = ( id ) => (e) => {
        e.preventDefault();
    }
    return (
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
                        title={
                            <Box
                                textAlign="center"
                                marginBottom="0rem"
                                marginTop="0rem"
                                fontSize="1.3rem"
                            >
                                <Box fontSize="80%" fontWeight="400" component="small">
                                    Grupo Dags
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
                    <CardContent className={ classes.cardContent }>
                        <Grid container spacing={1} className={ classes.titles }>
                            <Grid item xs={3}>
                                <Typography  className={classes.title}>
                                    Unidad
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography  className={classes.title}>
                                    Concepto
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography  className={classes.title}>
                                    Precio
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Typography align="center"  className={classes.name}>
                                    2
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography  className={classes.name}>
                                    Cristal Transparente 6mm Al corte Medidas: 20 x 20
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography align="center" className={classes.name}>
                                    $500.00
                                </Typography>
                            </Grid>
                        </Grid>
                        {
                            (item === 2) ? <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Typography align="center"  className={classes.name}>
                                    2
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography  className={classes.name}>
                                    Cubierta de cristal transparente 10mm de 180 x 20 con cantos pulidos
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography align="center" className={classes.name}>
                                    $500.00
                                </Typography>
                            </Grid>
                        </Grid> : null
                        }
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography align="right" className={classes.name}>
                                    TOTAL
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography align="center" className={classes.name}>
                                    $500.00
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>  
            </CardActionArea>          
        </div>
    );
}

export default CardVenta
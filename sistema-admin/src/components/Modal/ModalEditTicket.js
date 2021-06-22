import React, {useEffect, useState} from "react";
// @material-ui/core components
import {
    Divider,
    Grid,
    Button,
    FormControl,
    FormHelperText,
    makeStyles,
    FilledInput,
    Typography,
    Select,
    MenuItem,
    Box,
    InputAdornment,
} from '@material-ui/core';

import { Controller, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Get } from "actions/persistenceActions";
import { PostTicket } from "actions/persistenceActions";
import { PutClients } from "actions/clientesActions";

const useStyles = makeStyles(theme => ({
    root: {
        width: "400px",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            width: "80vw"
        },
    },
    center: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    input: {
        display: 'none',
    },
    buttonSave: {
        color: 'white',
    },
    form: {
        justifyContent: "center",
        marginTop: theme.spacing(3),
    },
}));

const ModalEditTicket = ({handleModalClose, idT} ) => {
    const classes = useStyles();
    console.log(idT, 'DATOS')

    const [listusers, setListusers] = useState([]);
    const [listclients, setListclients] = useState([]);
    const [dat, setData] = React.useState({idT})
    useEffect(() => {
        const gets = async () => {
            await Get("user/").then(result => setListusers(result));
            await Get("clients/").then(result => setListclients(result));
        //   await Get(`tickets/${idp}`).then(result => setData(result));
          console.log('respuesta', dat)
        };
        gets();
    }, []); 
    
    const defaultValues = {
        nombre: dat.idT.nombre,
        fecha: dat.idT.fecha,
        status: dat.idT.status,
        descripcion: dat.idT.descripcion,
        idCliente: dat.idT.clientes.idCliente,
        idUsuario: dat.idT.clientes.idUsuario,
        tipoTicket: dat.idT.tipoTicket,
    };
    
    const schema = yup.object().shape({
        nombre: yup.string(),
        fecha: yup.date(),
        status: yup.boolean(),
        descripcion: yup.string(),
        idCliente: yup.number(),
        idUsuario: yup.number(),
        tipoTicket: yup.string(),
    });
    const { handleSubmit, formState: { errors }, control, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
    });

    const onSubmit = data => {
        console.log(data, 'up');    
        PutClients(data, `tickets/update/${dat.idT.idTicket}`);
        reset(defaultValues);
        // handleModalClose();
    }
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.root} autoComplete="off">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom className={classes.center}>
                            Editar Ticket
                        </Typography>
                        <Divider />
                    </Grid>
                    {/* {data.map((row, i) =>{ */}
                    <Grid container className={classes.form}>
                    <Grid container item xs={12}>
                        <Grid item xs={12}>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Controller
                                    name="nombre"
                                    control={control}
                                    render={({ field }) =>
                                        <FilledInput
                                            autoComplete="off"
                                            value={field.value}
                                            onChange={(e) => field.onChange(field.value = e.target.value)}
                                            placeholder="Nombre"
                                        />
                                    }
                                />
                                <FormHelperText>
                                    <ErrorMessage errors={errors} name="nombre" as="span" />
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Controller
                                    name="fecha"
                                    control={control}
                                    render={({ field }) =>
                                        <FilledInput
                                            autoComplete="off"
                                            type="date"
                                            value={field.value}
                                            onChange={(e) => field.onChange(field.value = e.target.value)}
                                            placeholder="Fecha"
                                        />
                                    }
                                />
                                <FormHelperText>
                                    <ErrorMessage errors={errors} name="fecha" as="span" />
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Controller
                                    name="tipoTicket"
                                    control={control}
                                    render={({ field }) =>
                                        <Select
                                            labelId="demo-customized-select-label"
                                            id="demo-customized-select"
                                            value={field.value}
                                            onChange={(e) => field.onChange(field.value = e.target.value)}
                                            >
                                            <MenuItem value={dat.idT.tipoTicket}>
                                            {dat.idT.tipoTicket}
                                            </MenuItem>
                                            <MenuItem value= "Atencion cliente" >Atención cliente</MenuItem>
                                            <MenuItem value= "Mantenimeinto">Mantenimiento</MenuItem>
                                            <MenuItem value= "General">General</MenuItem>
                                        </Select>
                                    }
                                />
                                <FormHelperText>
                                    <ErrorMessage errors={errors} name="tipoTicket" as="span" />
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Controller
                                    name="idCliente"
                                    control={control}
                                    render={({ field }) =>
                                        <Select
                                            labelId="clientes"
                                            id="clientes"
                                            value={field.value}
                                            onChange={(e) => field.onChange(field.value = e.target.value)}
                                            >
                                            <MenuItem value={dat.idT.clientes.nombreClient}>
                                            {dat.idT.clientes.nombreClient}
                                            </MenuItem>
                                            {
                                                listclients.map( e => 
                                                    <MenuItem value={e.idCliente}>
                                                        { e.nombreClient }
                                                    </MenuItem>
                                                )
                                            }
                                        </Select>
                                    }
                                />
                                <FormHelperText>
                                    <ErrorMessage errors={errors} name="idCliente" as="span" />
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Controller
                                    name="idUsuario"
                                    control={control}
                                    render={({ field }) =>
                                        <Select
                                            labelId="usuario"
                                            id="usuario"
                                            value={field.value}
                                            onChange={(e) => field.onChange(field.value = e.target.value)}
                                            >
                                            <MenuItem value={dat.idT.usuarios.username}>
                                            {dat.idT.usuarios.username}
                                            </MenuItem>
                                            {
                                                listusers.map(e => 
                                                    <MenuItem value={e.idUser}>
                                                        { e.username }
                                                    </MenuItem>)
                                            }
                                        </Select>
                                    }
                                />
                                <FormHelperText>
                                    <ErrorMessage errors={errors} name="idUsuario" as="span" />
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Controller
                                    name="status"
                                    control={control}
                                    render={({ field }) =>
                                        <Select
                                            labelId="demo-customized-select-labels"
                                            id="demo-customized-selects"
                                            value={field.value}
                                            onChange={(e) => field.onChange(field.value = e.target.value)}
                                            >
                                            <MenuItem value={false}>
                                            Pendiente
                                            </MenuItem>
                                            <MenuItem value={true}>Finalizado</MenuItem>
                                        </Select>
                                    }
                                />
                                <FormHelperText>
                                    <ErrorMessage errors={errors} name="status" as="span" />
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Controller
                                    name="descripcion"
                                    control={control}
                                    render={({ field }) =>
                                        <FilledInput
                                            autoComplete="off"
                                            multiline={true}
                                            rows={6}
                                            value={field.value}
                                            onChange={(e) => field.onChange(field.value = e.target.value)}
                                            placeholder="descripcion"
                                        />
                                    }
                                />
                                <FormHelperText>
                                    <ErrorMessage errors={errors} name="descripcion" as="span" />
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                    {/* })} */}
                    <Grid item xs={12} className={classes.center}>
                        <Button
                            className={classes.buttonSave}
                            variant="contained"
                            color="primary"
                            type="submit" >
                            Actualizar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

export default ModalEditTicket;
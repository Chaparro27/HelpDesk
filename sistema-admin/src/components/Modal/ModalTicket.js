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

const ModalTicket = ({handleModalClose}) => {
    const classes = useStyles();

    const [listusers, setListusers] = useState([]);
    const [listclients, setListclients] = useState([]);

    const defaultValues = {
        nombre: "",
        fecha: "",
        status: 0,
        descripcion: "",
        idCliente: 0,
        idUsuario: 0,
        tipoTicket: "",
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

    useEffect(() => {
        const gets = async () => {
            await Get("user/").then(result => setListusers(result));
            await Get("clients/").then(result => setListclients(result));
        };
        gets();
    }, []); 
    const onSubmit = data => {
        console.log(data);
        
        PostTicket('tickets/create', data );
        reset(defaultValues);
        handleModalClose();
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.root} autoComplete="off">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom className={classes.center}>
                            Generar Ticket
                        </Typography>
                        <Divider />
                    </Grid>
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
                                            <MenuItem value={0}>
                                                <em>Asignar tipo</em>
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
                                                <MenuItem value={0}>
                                                    <em>Asignar cliente</em>
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
                                                <MenuItem value={0}>
                                                    <em>Asignar encargado</em>
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
                    <Grid item xs={12} className={classes.center}>
                        <Button
                            className={classes.buttonSave}
                            variant="contained"
                            color="primary"
                            type="submit" >
                            Generar ticket
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

export default ModalTicket;
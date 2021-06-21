import React from "react";
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

const ModalTicket = () => {
    const classes = useStyles();

    const defaultValues = {
        nombre: "",
        fecha: "",
        status: 0,
        descripcion: "",
        tipoTicket: "",
    };
    const schema = yup.object().shape({
        // pass: yup.string().required('Contraseña es requerida'),
        // confirmpass: yup.string().oneOf([yup.ref('pass'), null], 'Las contraseñas no son iguales'),
    });
    const { handleSubmit, formState: { errors }, control, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
    });

    const onSubmit = data => {
        console.log(data);
        // reset(defaultValues);
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
                            {/* <Grid item xs={12}>
                                <Typography variant="body1" gutterBottom className={classes.center}>
                                    Hola veo que eres nuevo en la plataforma,
                                    ¿porque no perzonalisas tu contraseña?
                                </Typography>
                            </Grid> */}
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
                                                    <em>Selecciona una opcion</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
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
                                        name="status"
                                        control={control}
                                        render={({ field }) =>
                                            <Select
                                                labelId="demo-customized-select-labels"
                                                id="demo-customized-selects"
                                                value={field.value}
                                                onChange={(e) => field.onChange(field.value = e.target.value)}
                                                >
                                                <MenuItem value="">
                                                    Selecciona una opcion
                                                </MenuItem>
                                                <MenuItem value={10}>Pendiente</MenuItem>
                                                <MenuItem value={10}>Finalizado</MenuItem>
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
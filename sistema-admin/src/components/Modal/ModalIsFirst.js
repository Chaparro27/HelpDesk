import React from 'react';
import { useCookies } from 'react-cookie';
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
    TextField,
    Box,
    InputAdornment,
} from '@material-ui/core';

import { Controller, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Email, Lock } from '@material-ui/icons';
import { Post } from 'actions/persistenceActions';

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

const ModalIsFirst = () => {

    const classes = useStyles();
    const [cookies, setCookie] = useCookies(['c_user']);

    const defaultValues = {
        username: cookies.c_user.username,
        pass: "",
        confirmpass: "",
    };
    const schema = yup.object().shape({
        pass: yup.string().required('Contraseña es requerida'),
        confirmpass: yup.string().oneOf([yup.ref('pass'), null], 'Las contraseñas no son iguales'),
    });
    const { handleSubmit, formState: { errors }, control, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
    });

    const onSubmit = data => {
        console.log("SDADSASDASDASDSD______")
        // Post("auth/isfirst", data);
        // cookies.c_user.isFirst = false;
        // let datas = cookies.c_user;
        // setCookie('c_user', datas, { path:'/', expires: new Date(Date.now()+ 1*60*24*365*365*365) });
        // reset(defaultValues);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.root} autoComplete="off">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom className={classes.center}>
                            Cambiar Contraseña
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid container className={classes.form}>
                        <Grid container item xs={12}>
                            <Grid item xs={12}>
                                <Typography variant="body1" gutterBottom className={classes.center}>
                                    Hola {cookies.c_user.name} veo que eres nuevo en la plataforma,
                                    ¿porque no perzonalisas tu contraseña?
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl
                                    variant="filled"
                                    component={Box}
                                    width="100%"
                                    marginBottom="1rem!important"
                                >
                                    <Controller
                                        name="pass"
                                        control={control}
                                        render={({ field }) =>
                                            <FilledInput
                                                autoComplete="off"
                                                value={field.value}
                                                onChange={(e) => field.onChange(field.value = e.target.value)}
                                                placeholder="Contraseña"
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <Lock />
                                                    </InputAdornment>
                                                }
                                            />
                                        }
                                    />
                                    <FormHelperText>
                                        <ErrorMessage errors={errors} name="pass" as="span" />
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
                                        name="confirmpass"
                                        control={control}
                                        render={({ field }) =>
                                            <FilledInput
                                                autoComplete="off"
                                                value={field.value}
                                                onChange={(e) => field.onChange(field.value = e.target.value)}
                                                placeholder="Confirmar contraseña"
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <Lock />
                                                    </InputAdornment>
                                                }
                                            />
                                        }
                                    />
                                    <FormHelperText>
                                        <ErrorMessage errors={errors} name="confirmpass" as="span" />
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
                            Save Changes
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

export default ModalIsFirst;
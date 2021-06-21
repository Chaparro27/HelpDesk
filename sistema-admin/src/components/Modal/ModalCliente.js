import React from 'react'
// @material-ui/core components
import { 
    Divider, 
    Grid, 
    Button, 
    FormControl, 
    FormHelperText, 
    InputLabel, 
    makeStyles, 
    Typography, 
    TextField, 
    Select, MenuItem 
} from '@material-ui/core';
import { CreateClient } from '../../actions/clientesActions';
import { Controller, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// import { useDispatch } from 'react-redux';
// import { CreatingWithImage } from '../../actions/persistenceActions';

const useStyles = makeStyles( theme => ({
    root: {
        width: "1080px",
        display:'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(2),
        [theme.breakpoints.down("sm")]:{
            width: "80vw"
        },
    },
    center: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    inputs: {
        width: '100%',
        '& span':{
            color: '#bf1650',
            '&::before':{
                display: 'inline',
                content: '"⚠ "',
            },
        },
    },
    select: { 
        width: '100%',
    },
    input: {
        display: 'none',
    },
    buttonSave: {
        backgroundColor: '#0367A6',
        color: 'white',
        margin: theme.spacing(3)
    },
    form: {
        justifyContent: "center",
        marginTop: theme.spacing(3),
    },
}));

const ModalCliente = ( {handleModalClose} ) => {
   
    const classes = useStyles();
    
    const defaultValues = {
        nombreClient: "",
        telefono: "",
    };
    const schema = yup.object().shape({
        nombreClient: yup.string().required('nombre es requerido'),
        telefono: yup.string().required('numero es requerido'),
        // notRequired()
            // .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
    });
    const { handleSubmit, formState: { errors } , control, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
    });
    // const dispatch = useDispatch();

    const onSubmit = data => {
        CreateClient(data, 'clients/create')
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.root} autoComplete="off">
                <Grid container spacing={3} md={4}>
                    <Grid item xs={12} >
                        <Typography variant="h4" gutterBottom className={classes.center}>
                            Registro cliente
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid container className={classes.form}>
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={12}>
                                <FormControl className={classes.inputs} >
                                    <Controller
                                        name="nombreClient"
                                        control={control}
                                        render={({field}) => 
                                            <TextField
                                                onChange={(e) => field.onChange(field.value = e.target.value) }
                                                variant="outlined"
                                                helperText={<ErrorMessage errors={errors} name="nombre" as="span" />}
                                                label="Nombre del cliente"
                                            />
                                        } />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.inputs} >
                                    <Controller
                                        name="telefono"
                                        control={control}
                                        render={({field}) => 
                                            <TextField
                                                onChange={(e) => field.onChange(field.value = e.target.value) }
                                                variant="outlined"
                                                helperText={<ErrorMessage errors={errors} name="numero" as="span" />}
                                                label="Numero telefonico" />
                                        }
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.center}>
                        <Button
                            className={classes.buttonSave}
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={handleModalClose} >
                            Agregar
                    </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

export default ModalCliente;
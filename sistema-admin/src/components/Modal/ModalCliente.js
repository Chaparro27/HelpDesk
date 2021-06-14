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

import PhotoCamera from '@material-ui/icons/PhotoCamera';

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

const ModalCliente = () => {
   
    const classes = useStyles();
    
    const defaultValues = {
        Image: "",
        Clientname: "",
        rfc: "",
        cellphone: "",
        address: "",
        socialreason: "",
        country: "",
        city: "",
        cp: "",
    };
    const schema = yup.object().shape({
        Clientname: yup.string().required('Client Name is required'),
        rfc: yup.string().required('RFC is required'),
        socialreason: yup.string().required('Social reason is required'),
        cellphone: yup.string() 
            .notRequired()
            // .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
    });
    const { handleSubmit, formState: { errors } , control, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
    });
    // const dispatch = useDispatch();

    const onSubmit = data => {
        console.log(data)
        const formdata = new FormData();
        if(data.Image.length !== 0){
            formdata.append("file", data.Image);
            data.Image = data.Image[0];
        } else {

        }
        const json = JSON.stringify(data);
        formdata.append("data", json);
        // dispatch( CreatingWithImage( "client/create/", data, formdata ) );
        reset(defaultValues);
        // handleModalClose();
    }
    const CHARACTER_LIMIT = 200;

    let source = ""
    const countrys = ["México", "USA"]
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.root} autoComplete="off">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom className={classes.center}>
                            Formulario Client
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid container className={classes.form}>
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={12} md={4}>
                                <FormControl className={classes.inputs} >
                                    <Controller
                                        name="Clientname"
                                        control={control}
                                        render={({field}) => 
                                            <TextField
                                                variant="outlined"
                                                helperText={<ErrorMessage errors={errors} name="Clientname" as="span" />}
                                                label="Client Name"
                                            />
                                        } />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl className={classes.inputs} >
                                    <Controller
                                        name="rfc"
                                        control={control}
                                        render={({field}) => 
                                            <TextField
                                                variant="outlined"
                                                helperText={<ErrorMessage errors={errors} name="rfc" as="span" />}
                                                label="RFC" />
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl className={classes.inputs}>
                                    <Controller
                                        name="cellphone"
                                        control={control}
                                        render={({field}) => 
                                            <TextField
                                                variant="outlined"
                                                helperText={<ErrorMessage errors={errors} name="cellphone" as="span" />}
                                                label="Phone number" />
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <FormControl className={classes.inputs} >
                                    <Controller
                                        name="address"
                                        control={control}
                                        render={({field}) => 
                                            <TextField
                                                variant="outlined"
                                                helperText={<ErrorMessage errors={errors} name="address" as="span" />}
                                                label="Address" />
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl className={classes.inputs}>
                                    <InputLabel shrink>Social reason:</InputLabel>
                                    <Controller
                                        name="socialreason"
                                        control={control}
                                        render={({field}) =>  (
                                            <TextField
                                                placeholder="Social reason"
                                                onChange={(e) => field.onChange(source = e.target.value)}
                                                multiline
                                                rows={6}
                                                inputProps={{
                                                    maxLength: CHARACTER_LIMIT
                                                }}
                                                value={field.value}
                                                margin="normal"
                                            />

                                        )}
                                    />
                                    <FormHelperText className={classes.error}>
                                        {`${source.length}/${CHARACTER_LIMIT}`}
                                        <ErrorMessage errors={errors} name="socialreason" as="span" />
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid container item xs={12} md={6} spacing={1}>
                                <Grid item xs={12}>
                                    <FormControl className={classes.select}>
                                        <InputLabel shrink>Country:</InputLabel>
                                        <Controller
                                            name="country"
                                            control={control}
                                            render={({field}) => 
                                                <Select>
                                                    <MenuItem value="">Select a country</MenuItem>
                                                    {countrys.map(country => (<MenuItem key={country} value={country}>{country}</MenuItem>))}
                                                </Select>
                                            }
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl className={classes.inputs}>
                                        <Controller
                                            name="city"
                                            control={control}
                                            render={({field}) => 
                                                <TextField
                                                    variant="outlined"
                                                    className={classes.error}
                                                    helperText={<ErrorMessage errors={errors} name="city" as="span" />}
                                                    label="City" />
                                            }
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl className={classes.inputs}>
                                        <Controller
                                            name="cp"
                                            control={control}
                                            render={({field}) => 
                                                <TextField
                                                    variant="outlined"
                                                    className={classes.error}
                                                    helperText={<ErrorMessage errors={errors} name="cp" as="span" />}
                                                    label="Postal code" />
                                            }
                                        />
                                    </FormControl>
                                </Grid>
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

export default ModalCliente;
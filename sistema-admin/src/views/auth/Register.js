import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons components
import Email from "@material-ui/icons/Email";
import School from "@material-ui/icons/School";
import PersonIcon from '@material-ui/icons/Person';

import { Controller, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Swal from 'sweetalert2'

// core components
import componentStyles from "assets/theme/views/auth/register.js";
import { Post } from "actions/persistenceActions";

const useStyles = makeStyles(componentStyles);

function Register() {
  const classes = useStyles();
  const theme = useTheme();


  const defaultValues = {
    username: "",
    name: "",
    email: "",
    toAccept: false,
  };

  const schema = yup.object().shape({
    username: yup.string().required('Nombre de usuario es requerido'),
    name: yup.string().required('Nombre es requerido'),
    email: yup.string().required('Email es requerido')
      .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email no es valido'),
    toAccept: yup.boolean().isTrue("Debe aceptar las politicas de privacidad"),
  });

  const { handleSubmit, formState: { errors }, control, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });


  const onSubmit = data => {
    let password = Post("user/create", data)
    Swal.fire({
      title: "Se a registrado correctamente su contrasña es:",
      text: password,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    ;

    // reset(defaultValues);
  }

  return (
    <>
      <Grid item xs={12} sm={7} md={5}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title={
              <Box
                color={theme.palette.gray[600]}
                textAlign="center"
                marginBottom="0rem"
                marginTop="0rem"
                fontSize="1.3rem"
              >
                <Box fontSize="80%" fontWeight="400" component="small">
                  Registrar
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
          <CardContent classes={{ root: classes.cardContent }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl
                variant="filled"
                component={Box}
                width="100%"
                marginBottom="1.5rem!important"
              >
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) =>
                    <FilledInput
                      autoComplete="off"
                      value={field.value}
                      onChange={(e) => field.onChange(field.value = e.target.value)}
                      placeholder="nombre de usuario"
                      startAdornment={
                        <InputAdornment position="start">
                          <School />
                        </InputAdornment>
                      }
                    />
                  }
                />
                <FormHelperText>
                  <ErrorMessage errors={errors} name="username" as="span" />
                </FormHelperText>
              </FormControl>
              <FormControl
                variant="filled"
                component={Box}
                width="100%"
                marginBottom="1.5rem!important"
              >

                <Controller
                  name="name"
                  control={control}
                  render={({ field }) =>
                    <FilledInput
                      autoComplete="off"
                      value={field.value}
                      onChange={(e) => field.onChange(field.value = e.target.value)}
                      placeholder="nombre completo"
                      startAdornment={
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      }
                    />
                  }
                />
                <FormHelperText>
                  <ErrorMessage errors={errors} name="name" as="span" />
                </FormHelperText>
              </FormControl>
              <FormControl
                variant="filled"
                component={Box}
                width="100%"
                marginBottom="1.5rem!important"
              >
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) =>
                    <FilledInput
                      autoComplete="off"
                      value={field.value}
                      onChange={(e) => field.onChange(field.value = e.target.value)}
                      placeholder="Correo electronico"
                      startAdornment={
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      }
                    />
                  }
                />
                <FormHelperText>
                  <ErrorMessage errors={errors} name="email" as="span" />
                </FormHelperText>
              </FormControl>
              <FormControlLabel
                control={
                  <Controller
                    name="toAccept"
                    control={control}
                    render={({ field }) =>
                      <Checkbox
                        checked={field.value}
                        onChange={(e) => field.onChange(field.value = e.target.checked)}
                        color="primary" />
                    } />
                }
                label={
                  <>
                    I agree with the{" "}
                    <Box
                      color={theme.palette.primary.main}
                      component="a"
                      textDecoration="none"
                    >
                      Privacy Policy
                    </Box>
                    <FormHelperText>
                      <ErrorMessage errors={errors} name="toAccept" as="span" />
                    </FormHelperText>
                  </>
                }
                classes={{
                  root: classes.formControlLabelRoot,
                  label: classes.formControlLabelLabel,
                }}
              />
              <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
                <Button color="primary" variant="contained" type="submit">
                  Create account
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Register;

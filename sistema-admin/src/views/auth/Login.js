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
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons components
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";

import { Controller, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// core components
import componentStyles from "assets/theme/views/auth/login.js";

const useStyles = makeStyles(componentStyles);

function Login() {
  const classes = useStyles();
  const theme = useTheme();

  
  const defaultValues = {
    username: "",
    pass: "",
  };

  const schema = yup.object().shape({
    username: yup.string().required('Nombre de usuario es requerida'),
    pass: yup.string().required('Contraseña es requerida'),
  });

  const { handleSubmit, formState: { errors } , control, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  }); 


  const onSubmit = data => {
    console.log(data)
    // dispatch( CreatingWithImage( "client/create/", data, formdata ) );
    reset(defaultValues);
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
                Iniciar Sesion
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
            <form onSubmit={ handleSubmit(onSubmit) } >
              <FormControl
                variant="filled"
                component={Box}
                width="100%"
                marginBottom="1rem!important"
              >
                <Controller
                  name="username"
                  control={control}
                  render={({field}) => 
                    <FilledInput
                      autoComplete="off"
                      value={field.value}
                      onChange={(e) => field.onChange(field.value = e.target.value) }
                      placeholder="Nombre de usuario"
                      startAdornment={
                        <InputAdornment position="start">
                          <Email />
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
                marginBottom="1rem!important"
              >
                <Controller
                  name="pass"
                  control={control}
                  render={({field}) => 
                    <FilledInput
                      autoComplete="off"
                      onChange={(e) => field.onChange(field.value = e.target.value) }
                      type="password"
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
              {/* <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Remeber me"
                labelPlacement="end"
                classes={{
                  root: classes.formControlLabelRoot,
                  label: classes.formControlLabelLabel,
                }}
              /> */}
              <Box textAlign="center" marginTop="1.2rem" marginBottom="1.2rem">
                <Button color="primary" variant="contained" type="submit">
                  Iniciar Sesion
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
        <Grid container component={Box} marginTop="0.5rem">
          <Grid item xs={6} component={Box} textAlign="left">
            <a
              href="#admui"
              onClick={(e) => e.preventDefault()}
              className={classes.footerLinks}
            >
              ¿Olvido su contraseña?
            </a>
          </Grid>
          <Grid item xs={6} component={Box} textAlign="right">
            <a
              href="/auth/register"
              // onClick={(e) => e.preventDefault()}
              className={classes.footerLinks}
            >
              Registrarme
            </a>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;

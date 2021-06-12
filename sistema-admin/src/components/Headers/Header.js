import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons components
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import EmojiEvents from "@material-ui/icons/EmojiEvents";
import GroupAdd from "@material-ui/icons/GroupAdd";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PieChart from "@material-ui/icons/PieChart";

// core components
import CardStats from "components/Cards/CardStats.js";

import componentStyles from "assets/theme/components/header.js";

const useStyles = makeStyles(componentStyles);

const Header = ({pathname}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <div className={ pathname[0] != "Home" ? classes.headerNotHome : classes.header}>
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          {
            (pathname[0] != "Home") 
              ? <></> 
              : <div>
                  <Grid container>
                    <Grid item sm={6} md={4} xs={12}>
                      <CardStats
                        subtitle="Usuarios"
                        title="100"
                        icon={InsertChartOutlined}
                        color="bgError"
                        footer={
                          <>
                            <Box
                              component="span"
                              fontSize="0.875rem"
                              color={theme.palette.success.main}
                              marginRight="0.5rem"
                              display="flex"
                              alignItems="center"
                            >
                              <Box
                                component={ArrowUpward}
                                width="1.2rem!important"
                                height="1.2rem!important"
                              />{" "}
                              3.48%
                            </Box>
                            <Box component="span" whiteSpace="nowrap" >
                              Mes pasado
                            </Box>
                          </>
                        }
                      />
                    </Grid>
                    <Grid item sm={6} md={4} xs={12}>
                      <CardStats
                        subtitle="Clientes"
                        title="50"
                        icon={PieChart}
                        color="bgWarning"
                        footer={
                          <>
                            <Box
                              component="span"
                              fontSize=".875rem"
                              color={theme.palette.error.main}
                              marginRight=".5rem"
                              display="flex"
                              alignItems="center"
                            >
                              <Box
                                component={ArrowDownward}
                                width="1.5rem!important"
                                height="1.5rem!important"
                              />{" "}
                              3.48%
                            </Box>
                            <Box component="span" whiteSpace="nowrap">
                              Semana pasada
                            </Box>
                          </>
                        }
                      />
                    </Grid>
                    <Grid item sm={12} md={4} xs={12}>
                      <CardStats
                        subtitle="Tickes pendientes"
                        title="25"
                        icon={GroupAdd}
                        color="bgWarningLight"
                        footer={
                          <>
                            <Box
                              component="span"
                              fontSize=".875rem"
                              color={theme.palette.warning.main}
                              marginRight=".5rem"
                              display="flex"
                              alignItems="center"
                            >
                              <Box
                                component={ArrowDownward}
                                width="1.5rem!important"
                                height="1.5rem!important"
                              />{" "}
                              1.10%
                            </Box>
                            <Box component="span" whiteSpace="nowrap">
                              Semana pasada
                            </Box>
                          </>
                        }
                      />
                    </Grid>
                  </Grid>
                </div>
          }
        </Container>
      </div>
    </>
  );
};

export default Header;

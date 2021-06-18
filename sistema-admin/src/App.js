import React from 'react';
import { CookiesProvider } from 'react-cookie';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";


import theme from "assets/theme/theme.js";
import AppRouter from 'routers/AppRouter';

const App = () => {

  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;

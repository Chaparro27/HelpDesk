const componentStyles = (theme) => ({
  bgDefault: {
    backgroundColor: theme.palette.dark.main,
  },
  contentMain: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "-12rem"
    },
  },
});

export default componentStyles;

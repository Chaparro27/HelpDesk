const componentStyles = (theme) => ({
  mainContent: {
    height: "100%",
    [theme.breakpoints.up("md")]: {
      marginLeft: "250px",
    },
  },
  containerRoot: {
    position: "relative",
    bottom: 0,
    left: 0,
    // [theme.breakpoints.up("md")]: {
    //   paddingLeft: "39px",
    //   paddingRight: "39px",
    // },
  },
});

export default componentStyles;

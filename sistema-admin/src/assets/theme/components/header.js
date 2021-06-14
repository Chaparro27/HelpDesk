
const componentStyles = (theme) => ({
  header: {
    position: "relative",
    background:
      `linear-gradient(87deg, ${theme.palette.vado.mainGradient}, ${theme.palette.vado.main})`,
    paddingBottom: "8rem",
    paddingTop: "3rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: "8rem",
    },
  },
  headerNotHome: {
    position: "relative",
    background:
      `linear-gradient(87deg, ${theme.palette.vado.mainGradient}, ${theme.palette.vado.main})`,
    paddingBottom: "8rem",
    paddingTop: "3rem",
    height: "376px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "8rem",
    },
  },
  containerRoot: {
    // [theme.breakpoints.down("md")]: {
    //   paddingLeft: "39px",
    //   paddingRight: "39px",
    // },
  },
});

export default componentStyles;

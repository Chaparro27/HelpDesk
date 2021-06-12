const componentStyles = (theme) => ({
  buttonRoot: {
    border: "0!important",
    boxShadow: "none!important",
    padding: "0.4rem 0.8rem",
    color: theme.palette.dark.dark,
    backgroundColor: theme.palette.white.main,
    "&:hover": {
      color: theme.palette.white.main,
      backgroundColor: theme.palette.dark.dark
    },
  },
  buttonLabel: {
    display: "flex",
  },
  dividerRoot: {
    height: "0",
    margin: ".5rem 0",
    overflow: "hidden",
    borderTop: "1px solid " + theme.palette.gray[200],
  },
  menuTitle: {
    margin: "0!important",
    textTransform: "uppercase",
    display: "block",
    padding: ".5rem 1rem",
    whiteSpace: "nowrap",
  },
});

export default componentStyles;

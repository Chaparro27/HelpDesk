
const componentStyles = (theme) => ({
  headerImg: {
    verticalAlign: "middle",
    borderStyle: "none",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  menuPaper: {
    width: "calc(100% - 2rem)",
  },
  outlineNone: {
    outline: "none!important",
  },
  flexDirectionColumn: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
});

export default componentStyles;

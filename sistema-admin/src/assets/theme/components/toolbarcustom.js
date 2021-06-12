
const componentStyles = (theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonsContainer: {
        marginLeft: theme.spacing(1),
    },
    removeicon: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        color: theme.palette.error.main,
        [theme.breakpoints.up(2800)]:{
            width: theme.spacing(5),
        },
    },
    addicon: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        color: theme.palette.success.main,
        [theme.breakpoints.up(2800)]:{
            width: theme.spacing(5),
        },
    },
    buttons: {
        margin: theme.spacing(0.5)
    },
});

export default componentStyles;
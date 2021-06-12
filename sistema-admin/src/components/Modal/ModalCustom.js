import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { Modal, makeStyles, IconButton } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        position: "relative",
        overflow:'hidden',
        // overflow:'scroll',
    },
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        [theme.breakpoints.down("sm")]:{
            top: 20,
            bottom: 20,
            overflowY: "scroll",
        },
    },
    icon: {
        position: 'absolute',
        right: 5,
        top: 5,
    }
}));

const ModalCustom = ({ 
    handleModalClose, 
    openModal, 
    component: Component,
}) => {
    const classes = useStyles();

    return (
        <>
            <Modal   
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={ classes.modal }
                open={ openModal }
                onClose={ handleModalClose } 
                closeAfterTransition
                disableEnforceFocus 
                disableAutoFocus
                disableBackdropClick
                disableRestoreFocus
                // disableScrollLock
                BackdropComponent={ Backdrop }
                BackdropProps={{
                    timeout: 500,
                }} >
                    <Fade in={ openModal }>
                        <div className={classes.paper}>
                            <IconButton onClick={ handleModalClose } size="small" className={ classes.icon }>
                                <CloseIcon fontSize="small"/>
                            </IconButton>
                            <Component 
                                handleModalClose={ handleModalClose } />
                        </div>
                    </Fade>
            </Modal>
        </>
    )
}

ModalCustom.propType = {
    handleModalClose: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default ModalCustom;
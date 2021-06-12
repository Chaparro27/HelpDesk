import React, { useEffect, useState } from "react";
// @material-ui/core components
import { 
    GridList, 
    GridListTile, 
    isWidthUp, 
    makeStyles, 
    withWidth,
    Container,
    Box 
} from '@material-ui/core';

import ToolBarCustom from "components/ToolBar/ToolBarCustom";
import ModalCustom from "components/Modal/ModalCustom";
import { useSearch } from "Hooks/useSearch";


const useStyles = makeStyles(theme => ({
    secundario: {
        display: 'flex',
        margin: '0px',
        height: '100',
        width: '100',
    },
    cardsContainer: {
        overflow: 'hidden',
    }, 
    root: {
        width: '100%',
        padding: theme.spacing(1),
    }
}));

const ListCustom = ({
    card: Card,
    modalComponent: Modal,
    ...props
}) => {
    const classes = useStyles();

    const [ isDelete, setIsDelete ] = useState(false); 
    const [ 
        isSearch, 
        search, 
        isCreating,
        whereUpdating,
        handleChange,
        reset, 
        handleSetValues,
        handleModalopen, 
        handleModalClose ] = useSearch();

    // useEffect(() => {
    //     handleSetData( state, search )
    // }, [search, handleSetData, state]);

    const handleDeleting = (event) => {
        event.preventDefault();
        setIsDelete(!isDelete)    
    }
    console.log(isCreating)
    let cols = 3;
    if(isWidthUp('xs', props.width)){
        cols = 1;
    }
    if(isWidthUp('sm', props.width)){
        cols = 2;
    }
    if(isWidthUp('md', props.width)){
        cols = 3;
    }
    if(isWidthUp('lg', props.width)){
        cols = 4;
    }
    if(isWidthUp('xl', props.width)){
        cols = 5;
    }

    let data = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 ]
    return(
        <>
            <Container 
                maxWidth={false}
                component={Box}
                marginTop={ isWidthUp('md', props.width) ? "-17rem" :"-22rem"}
                className={ classes.root }>
                <ToolBarCustom handleDeleting={handleDeleting} handleModalopen={handleModalopen}/>
                <GridList cellHeight={ 'auto' } cols={cols} className={ classes.cardsContainer }>
                    {
                        data.map((item, index) => (
                                    <GridListTile key={ item } cols={1}>
                                        <Card   
                                            item={ item } 
                                            isDelete={ isDelete } />
                                    </GridListTile>
                                )) 
                    }
                    {/* {
                        (isSearch) 
                            ?   data.map((item, index) => (
                                    <GridListTile key={ item.id } cols={1}>
                                        <Component   
                                            handleModalopen={ handleModalopen } 
                                            item={ item } 
                                            isDelete={ isDelete } />
                                            {
                                                (clickModal)
                                                    ? <ModalCustom 
                                                        handleModalClose={ handleModalClose }
                                                        openModal={ isCreating }
                                                        component={() => (<Modal item={item}/>)} />
                                                    : null
                                            }
                                    </GridListTile>
                                )) 
                            :   state.map((item, index) => (
                                    <GridListTile key={ item.id } cols={1}>
                                        <Component   
                                            handleModalopen={ handleModalopen } 
                                            item={ item } 
                                            isDelete={ isDelete } />
                                            {
                                                (clickModal)
                                                    ? <ModalCustom 
                                                        handleModalClose={ handleModalClose }
                                                        openModal={ isCreating }
                                                        component={() => (<Modal item={item}/>)} />
                                                    : null
                                            }
                                    </GridListTile>
                            )) 
                    } */}
                </GridList>
                <ModalCustom 
                    handleModalClose={ handleModalClose }
                    openModal={ isCreating }
                    component={ Modal } />
                
            </Container>
        </>
    );

}

export default withWidth()(ListCustom);
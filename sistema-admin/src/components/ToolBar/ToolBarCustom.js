import React from 'react'
import { 
    makeStyles,
    IconButton,
} from '@material-ui/core/';

// @material-ui/icons components
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import componentStyles from "assets/theme/components/toolbarcustom";
import FilterDropdown from 'components/Dropdowns/FilterDropdown';

const useStyles = makeStyles(componentStyles);

const ToolBarCustom = ({ handleDeleting, handleModalopen, handleChange, ChangeStatusButtons }) => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            {
                (true)
                ?   <div className={ classes.buttonsContainer }>
                        <IconButton
                            edge="start"
                            onClick={ handleModalopen }
                            className={ classes.buttons }
                            color="inherit" >
                            <AddCircleIcon  className={ classes.addicon } />
                        </IconButton>
                        <IconButton
                            edge="start"
                            onClick={ handleDeleting }
                            className={ classes.buttons }
                            color="inherit" >
                            <RemoveCircleIcon className={ classes.removeicon } />
                        </IconButton>
                    </div>
                :null
            }
            
            <FilterDropdown />
        </div>
    )
}

export default ToolBarCustom;
import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, AppBar, Toolbar, IconButton, Link, Typography, Menu, MenuItem } from '@material-ui/core'
import { Link as LinkRouter } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import { IconContext } from 'react-icons'
import { WiAlien } from 'react-icons/wi'
import { useAcaStateContext } from './../../Appcontext'
import firebase from '../firebase'

const AppFrame = ({children}, props) => {
    const iconContextSize = useMemo(() => ({size:'2em'}), [])
    const data = useAcaStateContext()    
    const perIndi = data.Acc.Permissions.Ind
    const perSegOpe = data.Acc.Permissions.SegOpe
    const RegInd = data.Acc.Permissions.RegInd
    const academia = data.Acc.Permissions.Academia
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);    
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSegOpe = () => {
        handleClose()
    }

    const closeSesion = async () => {
        await firebase.logout()
        window.location.reload(false)
    }

    return (
        <Grid container
            justify="center">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="menu">
                        <Link component={LinkRouter} to="/dashboard" color="inherit" aria-label="menu">
                            <IconContext.Provider value={iconContextSize}>
                                <WiAlien />
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Inversiones Deportivas
                    </Typography>
                    {academia && (
                        <div className="positionRigth">
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            { academia && <Link component={LinkRouter} to="/academia" color="inherit" aria-label="menu"> <MenuItem>Academia</MenuItem> </Link> }
                            { perIndi && <Link component={LinkRouter} to="/indicators" color="inherit" aria-label="menu"> <MenuItem>Indicadores</MenuItem> </Link> }
                            { perSegOpe && <MenuItem onClick={handleSegOpe}>Seguimiento operativo</MenuItem> }
                            { RegInd && <Link component={LinkRouter} to="/RegIndi" color="inherit" aria-label="menu"> <MenuItem>Registrar Indicadores</MenuItem> </Link> }
                            <MenuItem onClick={closeSesion}>Cerrar Sesión</MenuItem>
                        </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            {
                academia ? 
                <div className="fondoAcademia"> { children } </div>
                :
                <Grid item
                    xs={12}
                    sm={11}
                    md={10}>
                    { children }
                </Grid>
            }
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node,
}

export default AppFrame

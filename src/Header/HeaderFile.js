import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuListdata from './MenuListData';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { withRouter } from 'react-router-dom';
import { Button, ListItem, useMediaQuery } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down('xs')]:{
            flexGrow:1
        }
    },
    headerOptions:{
        display: 'flex',

    },
    appbar:{
        display: 'flex',
        justifyContent: 'space-between', 
    }
}));

const HeaderFile = props => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    // console.log(open);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (PageUrl) => {
        history.push(PageUrl);
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar className={classes.appbar}>
                    <div>
                    <Typography variant="h6" className={classes.title}>
                        <FastfoodIcon />  Food Order
                  </Typography>
                    </div>
                    <div>
                        {
                            isMobile ? (
                                <div>
                                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
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
                                        onClose={() => { setAnchorEl(null); }}
                                    >
                                        {
                                            MenuListdata.map((items, index) => {
                                                return <MenuItem key={index} onClick={() => handleClose(items.url)}>{items.item}</MenuItem>
                                            })
                                        }
                                    </Menu>
                                </div>
                            ) : (
                                <div className= {classes.headerOptions}>
                                     {
                                            MenuListdata.map((items, index) => {
                                                return <ListItem ><Button variant="contained" key={index} onClick={() => handleClose(items.url)}>{items.item}</Button></ListItem>
                                            })
                                        }
                                </div>
                            )
                        }

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(HeaderFile);
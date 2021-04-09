import React from 'react';
<<<<<<< HEAD
import { makeStyles, useTheme } from '@material-ui/core/styles';
=======
import { makeStyles,useTheme } from '@material-ui/core/styles';
>>>>>>> 9a02bd72c3dd44dcb61b3f0ac77dfe2a1e0e8f77
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
<<<<<<< HEAD
import { Button, Grid, ListItem, useMediaQuery } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
=======
import { Button, ListItem, useMediaQuery } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,
>>>>>>> 9a02bd72c3dd44dcb61b3f0ac77dfe2a1e0e8f77
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
<<<<<<< HEAD
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
            inlineSize: 'max-content',
        },
        color: 'black',
        fontSize: '30px',
        inlineSize: 'max-content',
        padding: '8px 0px 0px 0px',
    },
    headerOptions: {
        display: 'flex',
        paddingRight:'0px'

    },
    appbar: {
        backgroundColor: '#D5D6C9',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    manuNames: {
        inlineSize: 'max-content',
        paddingRight:'0px',
    },
    iconCss: {
        display:'flex',
        color:'red',
        padding: '20px 100px'
    },
    manuBars: {
        padding: '0px 100px 0px 0px'
    },
    

=======
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
>>>>>>> 9a02bd72c3dd44dcb61b3f0ac77dfe2a1e0e8f77
}));

const HeaderFile = props => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
<<<<<<< HEAD
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
=======
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
>>>>>>> 9a02bd72c3dd44dcb61b3f0ac77dfe2a1e0e8f77
    // console.log(open);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (PageUrl) => {
        history.push(PageUrl);
        setAnchorEl(null);
    };

    return (
<<<<<<< HEAD
        <Grid className={classes.root}>
            <AppBar position="static" >
                <Toolbar className={classes.appbar}>
                    <Grid item className={classes.iconCss}>
                        <FastfoodIcon style={{ fontSize: '50px',padding:'0px 10px 0px 0px' }} /> 
                        <Typography variant="h6" className={classes.title} >Food Order
                        </Typography>
                    </Grid>
                    <Grid item className={classes.manuBars}>
                        {
                            isMobile ? (
                                <Grid item>
                                    <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={handleMenu}>
=======
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
>>>>>>> 9a02bd72c3dd44dcb61b3f0ac77dfe2a1e0e8f77
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
<<<<<<< HEAD
                                                return <MenuItem className={classes.menuNames} key={index} onClick={() => handleClose(items.url)}>{items.item}</MenuItem>
                                            })
                                        }
                                    </Menu>
                                </Grid>
                            ) : (
                                <Grid item className={classes.headerOptions}>
                                    {
                                        MenuListdata.map((items, index) => {
                                            return <ListItem key={index}><Button style={{ inlineSize: 'max-content'}} variant="contained" onClick={() => handleClose(items.url)}>{items.item}</Button></ListItem>
                                        })
                                    }
                                </Grid>
                            )
                        }
                    </Grid>
=======
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
>>>>>>> 9a02bd72c3dd44dcb61b3f0ac77dfe2a1e0e8f77
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default withRouter(HeaderFile);
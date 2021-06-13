import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import {  Button, Grid, ListItem, useMediaQuery } from '@material-ui/core';
import {connect} from 'react-redux'
import {logout} from '../Redux'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
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
    

}));



const HeaderFile = props => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // console.log(open);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (PageUrl) => {
        history.push(PageUrl);
        setAnchorEl(null);
    };


    const logout = () => {
        const token  = 'bearer ' + document.cookie.split("=")[1];
        axios.get('http://localhost:5000/login/logout', {
            headers:{ 'Authorization' : token}
        }, { withCredentials: true })
            .then(res => {
                console.log(res.data.massage)
            })
        props.logout()
    }


    return (
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

                                    <ListItem key={11} onClick={() => logout()}><Button style={{ inlineSize: 'max-content'}} variant="contained" onClick={() => handleClose("/Login")}>{props.log?"Sign Out":"Sign In"}</Button></ListItem>
                                    {/* <ListItem key={12}><Button style={{ inlineSize: 'max-content'}} variant="contained" onClick={() => handleClose("/Login")}>Log Out</Button></ListItem> */}
                                </Grid>
                            )
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        log:state.log.chack
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        logout:()=>{
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HeaderFile))
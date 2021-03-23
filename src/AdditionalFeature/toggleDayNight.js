import { createMuiTheme } from '@material-ui/core';
import {useState} from 'react'
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
export const ToggleDayNight = ()=>{
    const [darkMode, setDarkMode] = useState(false);
    const theme = createMuiTheme({
        palette:{
            type:darkMode?'dark':'light'
        }
    });
    const icon = darkMode?<Brightness3Icon/> :<WbSunnyIcon/>;

    // return [theme,darkMode,setDarkMode,icon];
    return theme;
}

// Custom darkmode: const [theme,darkMode,setDarkMode,icon] = ToggleDayNight();
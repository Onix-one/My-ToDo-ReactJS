import * as React from 'react';
import Box from '@mui/material/Box';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import SideBarHeaderButton from '../buttons/side-bar-header-button'

import './side-bar.css';

const drawerWidth = 290;

const SideBar = (props) => {

    const drawer = (
        <div>
            <Toolbar className='side-bar-header p-0' >
                <SideBarHeaderButton></SideBarHeaderButton>
                <a className="header-profile__avatar-link me-3">
                    <img className=" header-profile__avatar"></img>
                </a>
                <div className='ml-4 mb-1'>
                    <div className="header-profile_greeting">
                        Welcome back,
                        <div>
                            <div className="header-profile_name" > 
                                Aliaksandr
                            </div>
                        </div>
                    </div>
                </div>
            </Toolbar>
            <hr className="p-0 m-0" />
            <div className="app-sidebar__title">
                <span className="app-sidebar__title-text">Telegram chats</span>
            </div>
            <List>
                {['All chats', 'Baned users'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders" >
            <div className='app-sidebar'>
                {drawer}
            </div>
        </Box>
    );
}

export default SideBar;
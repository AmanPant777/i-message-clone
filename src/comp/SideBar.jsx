import React from 'react'
import './SideBar.css'
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import RateReviewIcon from '@material-ui/icons/RateReview';
import SideBarChat from './SideBarChat'
const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar className='sidebar_avatar' />
                <div className="sidebar_header_input">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
                <IconButton className='sidebar_chats' variant='outlined'>
                    <RateReviewIcon />
                </IconButton>
            </div>
            <div className="sidebar_chats">
                <SideBarChat />
                <SideBarChat />

            </div>
        </div>
    )
}
export default SideBar

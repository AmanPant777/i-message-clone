import React from 'react'
import './SideBarChat.css'
import Avatar from '@material-ui/core/Avatar';
const SideBarChat = () => {
    return (
        <div className="sidebarchat">
            <Avatar />
            <div className="sidebarchat_info">
                <h3>Channel name</h3>
                <p>Last Seen Message</p>
                <small>Timestamp</small>
            </div>
        </div>
    )
}

export default SideBarChat

import React from 'react'
import './SideBarChat.css'
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux'
import { setChat } from '../redux/Slice/chatSlice'
const SideBarChat = ({ Name, id }) => {
    const dispatch = useDispatch()
    return (
        <div className="sidebarchat" onClick={() => {
            dispatch(setChat({
                chatId: id,
                chatName: Name
            }))
        }}>
            <Avatar />
            <div className="sidebarchat_info">
                <h3>{Name}</h3>
                <p>Last Seen Message</p>
                <small>Timestamp</small>
            </div>
        </div>
    )
}
export default SideBarChat

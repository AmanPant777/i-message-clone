import { Avatar } from '@material-ui/core'
import React from 'react'
import { selectUser } from '../redux/Slice/userSlice'
import { useSelector } from 'react-redux'
import './Message.css'
const Message = ({ content: { id, data } }) => {
    const user = useSelector(selectUser)
    return (
        <div className={`message ${user.email === data.email && 'message_sender'}`}>
            <Avatar src={data.photo} className='message_photo' />
            <p>{data.message}</p>
            <small>{new Date(data.timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
}
export default Message

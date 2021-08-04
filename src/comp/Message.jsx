import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'
const Message = ({ content: { id, data } }) => {

    return (
        <div className="message">
            <Avatar src={data.photo} />
            <p>{data.message}</p>
            <small>{new Date(data.timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
}

export default Message

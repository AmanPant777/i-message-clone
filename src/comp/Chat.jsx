import React, { useState } from 'react'
import './Chat.css'
import MicNoneIcon from '@material-ui/icons/MicNone';
import IconButton from '@material-ui/core/IconButton'
import Message from './Message'
import { selectChat } from '../redux/Slice/chatSlice'
import { useSelector } from 'react-redux';
const Chat = () => {
    const [input, setInput] = useState('')
    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
        console.log(input)
    }
    const sendMessage = (e) => {
        e.preventDefault()
        setInput('')
    }
    const ChatName = useSelector(selectChat)
    return (
        <div className="chat">
            <div className="chat_header">
                <h4>To : <span id='chat_name'>{ChatName}</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat_message">
                <Message />
            </div>
            <div className="chat_input">
                <form >
                    <input type="text" placeholder='i-message' value={input} onChange={handleChange} />
                    <button onClick={sendMessage}>Send</button>
                </form>
                <IconButton>
                    <MicNoneIcon />
                </IconButton>
            </div>
        </div >

    )
}

export default Chat

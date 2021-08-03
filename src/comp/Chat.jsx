import React, { useState } from 'react'
import './Chat.css'
import MicNoneIcon from '@material-ui/icons/MicNone';
import IconButton from '@material-ui/core/IconButton'
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
    return (
        <div className="chat">
            <div className="chat_header">
                <h4>To : <span id='chat_name'>Channel Name</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat_message">
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem architecto tempore omnis ducimus vel repellat distinctio voluptate nesciunt provident, atque ab ullam dignissimos dolor neque maxime nostrum expedita, suscipit perferendis?</h3>
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
        </div>
    )
}

export default Chat

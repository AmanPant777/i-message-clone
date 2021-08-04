import React, { useState, useEffect } from 'react'
import './Chat.css'
import MicNoneIcon from '@material-ui/icons/MicNone';
import IconButton from '@material-ui/core/IconButton'
import Message from './Message'
import { selectChat, selectId } from '../redux/Slice/chatSlice'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/Slice/userSlice';
import db from '../firebase';
import firebase from 'firebase';
const Chat = () => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const ChatId = useSelector(selectId)
    const user = useSelector(selectUser)
    const sendMessage = (e) => {
        e.preventDefault()
        db.collection('chats').doc(ChatId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName
        })
        setInput('')
    }
    useEffect(() => {
        if (ChatId) {
            db.collection('chats')
                .doc(ChatId)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot(snapshot => {
                    setMessages(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                }

                )
        }
    }, [ChatId])
    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)

    }

    const ChatName = useSelector(selectChat)
    return (
        <div className="chat">
            <div className="chat_header">
                <h4>To : <span id='chat_name'>{ChatName}</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat_message">
                {messages.map((data, key) => <Message key={key} content={data} />

                )}
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

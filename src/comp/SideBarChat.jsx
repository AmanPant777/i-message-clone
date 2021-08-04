import React, { useState, useEffect } from 'react'
import './SideBarChat.css'
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux'
import { setChat } from '../redux/Slice/chatSlice'
import db from '../firebase';
const SideBarChat = ({ Name, id }) => {
    const dispatch = useDispatch()
    const [chatInfo, setChatInfo] = useState([])
    useEffect(() => {
        db.collection('chats')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setChatInfo(snapshot.docs.map(doc => doc.data()))
            })
    }, [id])
    return (
        <div className="sidebarchat" onClick={() => {
            dispatch(setChat({
                chatId: id,
                chatName: Name
            }))
        }}>
            <Avatar src={chatInfo[0]?.photo} />
            <div className="sidebarchat_info">
                <h3>{Name}</h3>
                <p>{chatInfo[0]?.message}</p>
                <small>{new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()}</small>
            </div>
        </div>
    )
}
export default SideBarChat

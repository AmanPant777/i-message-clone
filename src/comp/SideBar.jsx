import React, { useState, useEffect } from 'react'
import './SideBar.css'
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import RateReviewIcon from '@material-ui/icons/RateReview';
import SideBarChat from './SideBarChat'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/Slice/userSlice'
import db, { auth } from '../firebase'
const SideBar = () => {
    const user = useSelector(selectUser)
    const [chats, setChats] = useState([])
    const addChat = () => {
        const ChatName = prompt('Please enter a chat Name')
        if (ChatName) {
            db.collection('chats').add({
                ChatName: ChatName
            })
        }
    }
    useEffect(() => {
        db.collection('chats').onSnapshot(snapshot => {
            return setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar className='sidebar_avatar' src={user.photo} onClick={() => auth.signOut()} />
                <div className="sidebar_header_input">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
                <IconButton className='sidebar_chats' variant='outlined'>
                    <RateReviewIcon onClick={addChat} />
                </IconButton>
            </div>
            <div className="sidebar_chats">
                {chats.map(({ id, data }) =>
                    <SideBarChat Name={data.ChatName} key={id} id={id} />
                )}
            </div>
        </div>
    )
}
export default SideBar

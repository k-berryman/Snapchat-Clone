import React from 'react'
import './Chats.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { db } from './firebase'

async function Chats() {
  return (
    <div className='chats'>
      <div className='chats__header'>
        <AccountBoxIcon className='chats__avatar'/>
        <div className='chats__search'>
          <SearchIcon />
          <input placeholder="Friends" type="text"/>
        </div>
        <ChatBubbleIcon className="chats__chatIcon"/>
      </div>

      <div className="chat__posts">

      </div>
    </div>
  )
}

export default Chats

import React, { useContext } from 'react'
import { chatContext } from '../context/ChatProvider'
import Chat from './Chat'

const ChatContainer = () => {
  const {
    newMessages
  }=useContext(chatContext)
  return (
    <div className='w-4/5'>
      <dl>
        {
          newMessages.map((message, key)=>{
            return <Chat key={key} message={message}></Chat>
          })
        }
      </dl>
    </div>
  )
}

export default ChatContainer
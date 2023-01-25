import React, { useContext } from 'react'
import { chatContext } from '../context/ChatProvider'

const AsideRooms = () => {
  const {rooms, changeRoom}=useContext(chatContext)

  return (
    <aside className='w-1/5 bg-green-500'>
      {
        rooms.map((room, key)=>(
          <div key={key} className='text-black'>
            <p onClick={()=>changeRoom(room)}>{room}</p>
          </div>
        ))
      }
    </aside>
  )
}

export default AsideRooms
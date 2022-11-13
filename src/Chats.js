import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
  return (
    <div className='chats'>
        <Chat 
            name = "Elon Musk"
            message = "Hey how are you"
            timestamp = "35 minutes ago"
            profilePic = 'https://cdn.pixabay.com/photo/2022/01/19/09/26/elon-musk-6949267__340.png'
        />
        <Chat 
            name = 'Elie'
            message='Hey good morning'
            timestamp='1 hour ago'
        />
        <Chat 
            name ='Sundar Pichai'
            message='Hey goody'
            timestamp ='15 days ago'
            profilePic='http://surl.li/crqft'
        />
        <Chat
            name='Jeff Bezos'
            message='Hola!! What a nice day'
            timestamp='1 month ago'
            profilePic='http://surl.li/crqff'
        />
    </div>
  )
}

export default Chats
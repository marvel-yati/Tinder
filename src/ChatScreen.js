import React,{useEffect, useState} from 'react'
import Message from './Message'
import './ChatScreen.css'
import { Avatar } from '@material-ui/core'
import axios from './axios'

function ChatScreen() {
  const [input, setInput] = useState('')
  let [messages, setPeople, setMessages] = useState([])
   
 
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/chatScreen')

      setPeople(req.data);
    }

    fetchData()
    }, [])

  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages,{message: input}])
    setInput('')
  }
  return (
    <div className='chatScreen'>
        <p className='chatScreen__timestamp'>YOU MATCHED WITH Ellen ON 10/05/2022</p>
        {messages.map((message) => (
            message.name ? (
                <div className='chatScreen__message'>
                    <Avatar
                        className='chatScreen__image'
                        alt = {message.message}
                        src = {message.image}
                    />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
            ) : (
                <div className='chatScreen__message'>
                    <p className='chatScreen__textUser'>{message.message}</p>
                </div>
            )
        ))}

        <div className='chatScreen__input'>
            <form>
                <input value = {input} 
                onChange = {(e) => setInput(e.target.value)}
                className = 'chatScreen__inputField' placeholder = 'Type a message...' type = 'text'/>
                <button onClick = {handleSend} type = 'submit' 
                className='chatScreen__inputButton'>SEND</button>
            </form>
        </div>

    </div>
  )
}

export default ChatScreen
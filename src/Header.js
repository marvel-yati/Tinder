import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import  IconButton  from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link, useNavigate} from 'react-router-dom'
import Chats from './Chats'

function Header({backButton}) {
  const navigate = useNavigate()
  return (
    <div className='header'>
      { backButton ? (  
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIosIcon fontSize='large' className=''/> 
         </IconButton>
       ): (  
         <IconButton>
          <PersonIcon className='header_icon' fontSize='large' />
        </IconButton> 
       )  }
        {/* < IconButton>
            <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton> */}
        <Link to = '/'>
          <img className='header_logo' src={require('./tinder-logo.png')} alt=''></img>
        </Link>

        <Link to ="/chat">
          < IconButton>
            <ForumIcon fontSize='large' className='header_icon'/>
          </IconButton>
          
        </Link>

    </div>
  )
}

export default Header
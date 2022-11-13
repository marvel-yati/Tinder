import React from 'react'
import "./App.css"
import Header from "./Header"
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import {BrowserRouter as Router, Routes, Route, Redirect} from 'react-router-dom'
import Chats from './Chats';
import ChatScreen from './ChatScreen'



function App() {
  return (
    <div className="app">
      {/* Header */}
      
      <Router>
      {/* <Header /> */}
        {/* Tinder Cards */}
        <Routes>
          {/* <Route path='/chat'
            element={<Chats/>} >
          </Route> */}
          <Route path='/chat/:person' element={<><Header backButton='/chat'/><ChatScreen /></>}/>
          
          <Route path ='/chat' element={<><Header backButton='/'/><Chats/></>}>
             
          </Route>
          <Route path='/' element={<><Header/><TinderCards/><SwipeButtons/></>}></Route>
        </Routes>
        
      </Router>
      {/* <TinderCards/>
      <SwipeButtons/> */}
    </div>
  );
}

export default App;

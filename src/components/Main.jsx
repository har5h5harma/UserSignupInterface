import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Main.css"
const Main = () => {
    const move=useNavigate();
    const handleMainPage=()=>{
      console.log("You Are logged out")
        move('/')
    }
  return (
    <div className='maincss'>
      <h1>Home/Main Page</h1>
      <h3>Hello harsh</h3>
      <button onClick={handleMainPage}>Log Out</button>
    </div>
  )
}

export default Main

import React from 'react'
import Bg from './Mainbg.jsx/Bg'
const Home = () => {
  return (
    <div 
  className="bg-cover bg-center h-screen flex justify-center items-center"
  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1773546057870-ba1b62601d1e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
  
>
    <Bg />
</div>
  )
}

export default Home

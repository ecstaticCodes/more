import Main from "./Components/Main"
import Navbar from "./Components/Navbar"
import Top_navbar from "./Components/Top_navbar"
import { useState } from "react"
import { Routes , Route } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Card from "./Pages/Card"
const App = () => {
  const [isOpen , setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className="flex">
      <Navbar isOpen={isOpen} darkMode={darkMode}/>
      {isOpen && (
    <div 
      className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
      onClick={() => setIsOpen(false)}
    />
)}
    <div className="flex flex-col flex-1">
      <Top_navbar setIsOpen={setIsOpen} darkMode= {darkMode} setDarkMode = {setDarkMode} />
      <Outlet/>
      
    </div>
    </div>
  )
}

export default App
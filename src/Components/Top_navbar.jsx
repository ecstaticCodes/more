import { Calendar } from "lucide-react"
import { User } from "lucide-react"
import { Menu } from "lucide-react"
const Top_navbar = ({setIsOpen , darkMode , setDarkMode}) => {
return <div className={`flex items-center justify-between px-8 py-6 ${darkMode? 'bg-gray-900 text-white': 'bg-rose-300 text-black'}`}>
    <div className="flex items-center gap-16">
        <button className="block sm:hidden" onClick={() => setIsOpen(prev => !prev)}>
        <Menu size={24} />
        </button>
        <h2 className={`text-2xl font-bold ${darkMode? 'text-white' : 'text-black'}`}>Analytics</h2>
    <div className="flex justify-center items-center border rounded-lg bg-white text-black p-2"><p className="text-sm">01.08.2022 - 31.08.2022</p>
<Calendar size={16} className=" ml-2 flex items-center cursor-pointer" /></div>
    </div>


    <div className="ml-auto flex gap-2 sm:gap-4 md:gap-4 lg:gap-8 items-center">
       <div className="border rounded-full p-2 text-white "> <button className= "text-md sm:text-lg md:text-2xl p-2 font-bold cursor-pointer" onClick={() => setDarkMode(darkMode => !darkMode)}>Theme</button></div>
        <div className="flex text-2xl justify-center items-center"><User size={24} className="font-bold hover:cursor-pointer"></User> Mani</div>
    </div>
</div>
}

export default Top_navbar

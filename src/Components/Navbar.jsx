import Heading from './Heading'
import Point_upper from './Points_upper'
const Navbar = ({isOpen , darkMode}) => {
return (
    <div className='flex min-h-screen'>
    <div className= {` fixed top-0 left-0 min-h-screen z-50 sm:relative ${isOpen ? 'block' : 'hidden sm:block'} ${darkMode? 'bg-gray-800 text-white': 'bg-rose-400 text-black'}`}>
        <Heading />
        <Point_upper />
    </div>
    
    </div>
)
}

export default Navbar

import { LayoutGrid, Package, MessageSquare, Users, Settings, LogOut } from 'lucide-react'
import { useReducer } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
    active: 'Analytics'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVE':
            return { active: action.payload }
        default:
            return state
    }
}

const Point_upper = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const linkClass = (name) =>
        `flex text-lg items-center font-mono p-2 rounded-lg cursor-pointer transition-colors ${
            state.active === name ? 'bg-white/50 font-semibold' : 'hover:bg-gray-100'
        }`

    return (
        <div className='flex flex-col gap-2 px-4'>

            <Link to="/card" onClick={() => dispatch({ type: 'SET_ACTIVE', payload: 'Analytics' })} className={linkClass('Analytics')}>
                <LayoutGrid size={20} className='mr-3' /> Analytics
            </Link>

            <Link to="/page" onClick={() => dispatch({ type: 'SET_ACTIVE', payload: 'Products' })} className={linkClass('Products')}>
                <Package size={20} className='mr-3' /> Products
            </Link>

            <Link onClick={() => dispatch({ type: 'SET_ACTIVE', payload: 'Messages' })} className={linkClass('Messages')}>
                <MessageSquare size={20} className='mr-3' /> Messages
            </Link>

            <Link onClick={() => dispatch({ type: 'SET_ACTIVE', payload: 'Customers' })} className={linkClass('Customers')}>
                <Users size={20} className='mr-3' /> Customers
            </Link>

            <hr className="border-t border-gray-200 my-1" />

            <Link to={"/API/Settings.jsx"} onClick={() => dispatch({ type: 'SET_ACTIVE', payload: 'Settings' })} className={linkClass('Settings')}>
                <Settings size={20} className='mr-3' /> Settings
            </Link>

            <Link to="/login" onClick={() => dispatch({ type: 'SET_ACTIVE', payload: 'Logout' })} className={linkClass('Logout')}>
                <LogOut size={20} className='mr-3' /> Logout
            </Link>

        </div>
    )
}

export default Point_upper

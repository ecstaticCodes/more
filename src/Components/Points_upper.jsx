import {LayoutGrid,    // Analytics
    Package,       // Products
   MessageSquare, // Messages
   Users,         // Customers
   Settings,      // Settings
   LogOut,        // Sign Out
} from 'lucide-react'

import { Link } from 'react-router-dom'


const Point_upper = () => {
    return <div className='flex flex-col gap-2 px-4'>
        <Link to = "/card" className='flex text-lg items-center font-mono p-2 rounded-lg hover:bg-gray-100 cursor-pointer'> <LayoutGrid size={20} className='mr-3' />Analytics</Link>
        <Link to ="/page" className='flex text-lg items-center font-mono p-2 rounded-lg hover:bg-gray-100 cursor-pointer'> <Package size={20} className='mr-3' />Products</Link>
        <Link className='flex text-lg items-center font-mono p-2 rounded-lg hover:bg-gray-100 cursor-pointer'> <MessageSquare size={20} className='mr-3' />Messages</Link>
        <Link className='flex text-lg items-center font-mono p-2 rounded-lg hover:bg-gray-100 cursor-pointer'> <Users size={20} className='mr-3' />Customers</Link>
        <hr className="border-t border-gray-200 my-1" />
        <Link className='flex text-lg items-center font-mono p-2 rounded-lg hover:bg-gray-100 cursor-pointer'><Settings size={20} className='mr-3' />Settings</Link>
        <Link to ="/login" className='flex text-lg items-center font-mono p-2 rounded-lg hover:bg-gray-100 cursor-pointer'><LogOut size={20} className='mr-3' />Logout</Link>
    </div>


}

export default Point_upper





